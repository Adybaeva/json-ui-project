export default class StyleHelper {
  static extractStyleData(style) {
    if (!style) return null;

    const { webStyle, actions } = style;
    const webStyleObject = this.clearWebStyles(webStyle);
    if (!actions) return { webStyle: webStyleObject };
    const actionsObject = this.clearActionsObject(actions);

    return {
      webStyle: webStyleObject,
      actions: actionsObject,
    };
  }

  static clearWebStyles(webStyle) {
    if (!webStyle) return null;

    const replacementKeys = {
      "text-align": "textAlign",
      "font-size": "fontSize",
      "font-weight": "fontWeight",
      "font-style": "fontStyle",
      "text-transform": "textTransform",
    };
    return Object.entries(webStyle)?.reduce((acc, [key, value]) => {
      const newKey = replacementKeys[key] || key;
      acc[newKey] = value;
      return acc;
    }, {});
  }

  static clearActionsObject(actions) {
    if (!actions) return null;

    const replacementActions = {
      onHover: (changedStyle) => {
        let oldValue = null;
        return {
          onMouseEnter: (e) => {
            Object.entries(changedStyle).forEach(([key, value]) => {
              oldValue = e.currentTarget.style[key];
              e.currentTarget.style[key] = value;
            });
          },
          onMouseLeave: (e) => {
            Object.entries(changedStyle).forEach(([key]) => {
              e.currentTarget.style[key] = oldValue;
            });
          },
        };
      },
    };

    return Object.entries(actions)?.reduce((acc, [key, value]) => {
      if (replacementActions[key]) {
        const newActions = replacementActions[key](value);
        return { ...acc, ...newActions };
      } else {
        acc[key] = (e) => {
          Object.entries(value).forEach(([key, value]) => {
            e.currentTarget.style[key] = value;
          });
        };
      }
      return acc;
    }, {});
  }
}
