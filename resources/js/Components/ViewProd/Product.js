import React, { Component } from 'react'
import axios from 'axios'
import ProductPresenter from './ProductPresenter'
import WordCloud from './WordCloud';

export default class extends Component {
  constructor(props) {
    super(props)
    // const {location: {pathname}} = props;
    const {
      user_id,
      match:{params:{food_code}}
    } = this.props;
    this.state = {
      // result: null,
      result: null,
      loading: true,
      error: "Can't find movies information",
      test: '',
      food_code:food_code,
      user_id:user_id,
    }
    // result:{'food_name': 'test',
    // 'food_photo': null,
    // 'food_rating': 10,
    // 'material': 'test'},
  }
  // food_id: 1,
  // company_name: "(주)농심",
  // food_name: "신라면",
  // food_photo: "http://image.nongshim.com/non/pro/03_product.jpg",
  // point: 4,
  // review_count: 2,
  // search_count: 7,
  // company: null,
  // country: "대한민국",
  // sex: "여자"

  async componentDidMount() {
    
    console.log('componentDidMount 실행: ');
    const { food_code, user_id } =this.state;
    const props_user_id =this.props.id;
    console.log(`user_id: ${user_id}, ${props_user_id}`);
    let result = null;
    try {
      // food_id에 대한 정보 가져오는 api
      if(user_id) {
        ({data : result} = await axios.get(`http://3.34.97.97/api/detailFood/${food_code}/${user_id}`));
      } else {
        ({data : result} = await axios.get(`http://3.34.97.97/api/detailFood/${food_code}`));
      }
      console.log("food_code: ");
      console.log(food_code);
      this.setState({
        result,
        loading: false,
      });
    } catch (e) {
      this.setState({
        error: "Can't find movies information",
        loading: false,
      });
    }
  }

  render() {
    // const {result ,loading, error, test} = this.state;
    console.log('render state: ')
    console.log(this.state.result)
    const { result, error, loading, food_code } = this.state
    return (
      <>
        <ProductPresenter result={result} error={error} loading={loading} />
      </>
    );
  }
}