import ViewToComponentRenderer from './ViewToComponentRenderer'

const Container = ({ style, children, actions }) => {

  return (
    <div className="Container" style={style} {...actions} data-testid="container">
      {children.map((child, index) => (
        <ViewToComponentRenderer key={index} view={child} />
      ))}
    </div>
  )
}

export default Container