import React from "react";
import axios from "axios";

class ShoppingList extends React.Component {
  state = {
    items: []
  }


  componentDidMount() {
    this.getItems();
  }

  getItems() {
    return axios
    .get('https://party-planner-build-week.herokuapp.com/api/items/')
    .then(res => {this.setState({items: res.data})})
  }

  onSubmitHandle(event) {
    event.preventDefault();
    this.setState({
      items: [
        ...this.state.items,
        {
          id: Date.now(),
          title: event.target.item.value,
          done: false,
          date: new Date()
        }
      ]
    });
    event.target.item.value = "";
  }

  onDeleteHandle() {
    let id = arguments[0];
    this.setState({
      items: this.state.items.filter(item => {
        if (item.id !== id) {
          return item;
        }
      })
    });
  }

  renderEditForm() {
    if (this.state.edit) {
      return (
        <form onSubmit={this.onUpdateHandle.bind(this)}>
          <input
            type="text"
            name="updatedItem"
            className="item"
            defaultValue={this.state.title}
          />
          <button className="update-add-item">Update</button>
        </form>
      );
    }
  }

  onEditHandle(event) {
    this.setState({
      edit: true,
      id: arguments[0],
      title: arguments[1]
    });
  }

  onUpdateHandle(event) {
    event.preventDefault();
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === this.state.id) {
          item["title"] = event.target.updatedItem.value;
          return item;
        }
        return item;
      })
    });
    this.setState({
      edit: false
    });
  }

  render() {
    return (
      <div>
          <h2>Shopping List</h2>
        <ul>
          {this.state.items.map(item => (
            <li key={item.id} className={item.done ? "done" : "hidden"}>
              {item.title}
              <button
                onClick={this.onEditHandle.bind(this, item.id, item.title)}
              >
                Edit
              </button>
              <button onClick={this.onDeleteHandle.bind(this, item.id)}>
                Complete
              </button>
            </li>
          ))}
        </ul>
        {this.renderEditForm()}
        <form onSubmit={this.onSubmitHandle.bind(this)}>
          <input type="text" name="item" className="item" />
          <button className="btn-add-item">Add</button>
        </form>
      </div>
    );
  }
}

export default ShoppingList;
