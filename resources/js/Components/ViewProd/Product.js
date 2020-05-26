import React, {Component} from 'react';
import axios from 'axios';
import ProductPresenter from './ProductPresenter';


class Product extends Component {
    constructor(props){
        super(props);
        // const {location: {pathname}} = props;
        this.state = {
            result: null,
            loading: true,
            error: null,
            test: "",
        };
        // result:{'food_name': 'test', 
        // 'food_photo': null, 
        // 'food_rating': 10, 
        // 'material': 'test'},
    }


    componentDidMount = () => {
        console.log("aa");
        // try{    
        //      await axios({
        //         url: `api/searchProduct/`,
        //         params: {
        //             id : '123'
        //         }
        //     })
        //     .then( res => {
        //         console.log(res);
        //     })
        //     .catch( error => {
        //         console.log(error);
        //     });

        // } catch {
        //     console.log('errr');
        // }
     
    }
    // async componentDidMount(){
    //     const {
    //         match:{params:{id}}, 
    //         history: {push}
    //     } = this.props;
    //     try {
    //         const {data : {result: result}} = await axios.get('api/searchProduct/', {
    //             params : {
    //                 id: '123'
    //             }
    //         });
    //         this.setState({
    //             result : result
    //         });
    //         throw Error();
    //     } catch {
    //         this.setState({
    //             error: "Can't find movies information"
    //         });
    //     } finally {
    //         this.setState({
    //             loading: false
    //         });
    //     }
    //     console.log(result);   
    // }

    render() {
        const {result ,loading, error, test} = this.state;
        // console.log('state: ');
        // console.log(this.state);
        return (
            <ProductPresenter
                result = {result}
                error = {error}
                loading = {loading}
            />
        );
    }
}

export default Product;
