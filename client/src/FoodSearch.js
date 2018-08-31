
import React from 'react';
import Client from './Client';

const MATCHING_ITEM_LIMIT = 25;

class FoodSearch extends React.Component {
  state = {
    foods: [],
    showRemoveIcon: false,
    searchValue: '',
  };

  handleSearchChange = (e) => {
    const value = e.target.value;
    console.log('search value : ', value);

    this.setState({
      searchValue: value,
    });

    Client.search(value, (foods) => {
      this.setState({
        foods: foods.slice(0, MATCHING_ITEM_LIMIT),
      });
    });
  };

  handleSearchCancel = () => {
    this.setState({
      foods: [],
      showRemoveIcon: false,
      searchValue: '',
    });
  };

  render() {
    const { showRemoveIcon, foods } = this.state;
    const removeIconStyle = showRemoveIcon ? {} : { visibility: 'hidden' };

    const foodRows = foods.map((food, idx) => (
      <tr
        key={idx}
      >
        <td>{food.description}</td>
        <td>{food.kcal}</td>
        <td>{food.protein_g}</td>
        <td>{food.fat_g}</td>
        <td>{food.carbohydrate_g}</td>
      </tr>
    ));

    return (
      <div id='food-search'>
        <table>
          <thead>
            <tr>
              <th colSpan='5'>
                <div>
                  <div>
                    <input
                      type='text'
                      placeholder='Search foods...'
                      value={this.state.searchValue}
                      onChange={this.handleSearchChange}
                    />
                    <i/>
                  </div>
                  <i
                    onClick={this.handleSearchCancel}
                    style={removeIconStyle}
                  />
                </div>
              </th>
            </tr>
            <tr>
              <th>Description</th>
              <th>Kcal</th>
              <th>Protein (g)</th>
              <th>Fat (g)</th>
              <th>Carbs (g)</th>
            </tr>
          </thead>
          <tbody>
            {foodRows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FoodSearch;
