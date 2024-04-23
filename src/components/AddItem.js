import React from 'react'

class AddItem extends React.Component {
  constructor(props)
  {
    super(props)
  
    this.state = {
      productName:"",
      productPrice:0
       
    }
  }
  render(){
  return (
    <form className='row' onSubmit={(e)=>{e.preventDefault()
    this.props.addItem(this.state.productName,Number(this.state.productPrice))}}>
  <div className="mb-3 col-6">
    <label htmlFor="inputName" className="form-label">
      Name:
    </label>
    <input
      type="text"
      className="form-control"
      id="inputName"
      name="productName"
      onChange={(e)=>{
        this.setState({productName:e.currentTarget.value});

      }}
      aria-describedby="name"
      value={this.state.productName}
    />
    
  </div>
  <div className="mb-3 col-6">
    <label htmlFor="inputPrice" className="form-label">
      Price:
    </label>
    <input
      type="number"
      className="form-control"
      id="inputPrice"
      name='productPrice'
      onChange={(e)=>{
        this.setState({productPrice:e.currentTarget.value});

      }}
      value={this.state.productPrice}
    />
  </div>
  
  <button type="submit" className="btn btn-primary">
    Add Item
  </button>
</form>

  )
}
}
export default AddItem;
