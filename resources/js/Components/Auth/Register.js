import React, { Component } from 'react';
// import { AuthContent, InputWithLabel, AuthButton, AuthLink } from './Auth';
import {InputWithLabel, SelectWithLabel, CheckWithLabel} from './InputWithLabel';
import AuthContent from './AuthContent';
import AuthButton from './AuthButton';
import AuthLink from './AuthLink';
import styled, { ThemeConsumer } from 'styled-components';
import axios from "axios";

const CheckInput = styled.input`
    width: 100%;
`;


class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            page : 0,
            id : "",
            password: "",
            password_confirmation: "",
            nickname: "",
            country: '한국',
            country_code: 0,
            gender: 1,
            // 남=1, 여=0
            birth: null,
            material : [],
            sweet: 1,
            salty: 1,
            hot: 1,
            sour: 1,
            bitter: 1,
            photo: null,
            email: "",
        }
    }

    // 다음페이지로 넘어가는 기능
    handlePageButton = e => {
        e.preventDefault();
        let {page} = this.state;
        console.log(page);
        if (page>=0 && page<=3){
            page++;
            this.setState({
                page
            });
        }
    };

    // 기피재료 이외의 정보 설정
    updateInform = e => {
        // e.preventDefault();
        const { target : {name, value}} = e;
        const  {id ,email, password,password_confirmation,nickname,country,gender,birth,sweet,salty,hot,sour,bitter} = this.state;
        const set = {
            id ,email, password, password_confirmation ,nickname,country,gender,birth,sweet,salty,hot,sour,bitter
        };
        for(var key in set){
            if(key === name){
                set[key] = value;
                switch(key){
                    case "id":
                        this.setState({
                            id: set[key]
                        });
                        break;
                    case "email":
                        this.setState({
                            email: set[key]
                        });
                        break;
                    case "password":
                        this.setState({
                            password: set[key]
                        });
                        break;
                    case "password_confirmation":
                        this.setState({
                            password_confirmation: set[key]
                        });
                        break;
                    case "nickname":
                        this.setState({
                            nickname: set[key]
                        });
                        break;
                        // 업데이트 된 country값을 country_code로 변환
                    case "country":
                        this.setState({
                            country: set[key]
                        });
                        updateCountryCode(set[key]);
                        break;
                    case "gender":
                        this.setState({
                            gender: set[key]
                        });
                        break;
                    case "birth":
                        this.setState({
                            birth: set[key]
                        });
                        break;
                    case "sweet":
                        this.setState({
                            sweet: set[key]
                        });
                        break;
                    case "salty":
                        this.setState({
                            salty: set[key]
                        });
                        break;
                    case "hot":
                        this.setState({
                            hot: set[key]
                        });
                        break;
                    case "sour":
                        this.setState({
                            sour: set[key]
                        });
                        break;
                    case "bitter":
                        this.setState({
                            bitter: set[key]
                        });
                        break;
                    default:
                        console.log('error');
                }
            }
        }
        console.log(name+" : "+value);
    };

    // 기피재료 정보 설정
    updateMaterial = e => {
        const { target : {value}} =e;
        let { material} = this.state;
        let temp = [];
        let flag = false;
        let index;
        // console.log(typeof(material));
        // console.log(typeof(id));
        // for(var i=0; i<material.length; i++){
        //     if(material[i] === value){
        //         flag = true;
        //     }
        // }
        // if (!flag){
        //     temp =  material.push(value);
        // }
        
        material.forEach( (item, ide) => {
            console.log("item: "+ item);
            if( item===value){
                flag = true;
                index = ide;
            }
        });
        if (!flag){
            temp =  material.push(value);
        } else {
            material.splice(index, 1);
        }
        this.setState({
            material
        });
        // console.log("material: "+material);
        // console.log("count: "+count);
    };

    updateCountryCode(country){
    // country_code 
	//  410 대한민국
	//  392 일본
	//  156 중화인민공화국
	//  840 미국
        switch (country){
            case '한국':
                this.setState({
                    country_code : 410
                });
                break;
            case '일본':
                this.setState({
                    country_code : 392
                });
                break;
            case '미국':
                this.setState({
                    country_code : 840
                });
                break;
            case '중국':
                this.setState({
                    country_code : 156
                });
                break;
        }
    };

    // form 제출 
    handleFormButton = e => {
        e.preventDefault();
        const {id, email, password,password_confirmation, nickname, photo, country_code, gender, birth, material, sweet, bitter, hot, sour, salty } = this.state;
        let material_str = material.toString();
        axios.post('/api/regist', {
            // inform : {
                id, 
                email,
                password, 
                password_confirmation, 
                nickname, 
                country_code, 
                gender, 
                birth,
                material: material_str, 
                sweet, 
                bitter, 
                hot, 
                sour, 
                salty,
                photo,
        })
        .then( response => {
            console.log(response);
        })
        .catch( error => {
            console.log(error);
        }); 
        console.log("----Function form----");
        console.log("id: "+ id);
        console.log("email: "+ email);
        console.log("password: "+ password);
        console.log("nickname: "+ nickname);
        console.log("country_code: "+ country_code);
        console.log("gender: "+ gender);
        console.log("birth: "+ birth);
        console.log("material: "+ material);
        console.log("sweet: "+ sweet);
        console.log("bitter: "+ bitter);
        console.log("hot: "+ hot);
        console.log("sour: "+ sour);
        console.log("salty: "+ salty);
        console.log("photo: "+ photo);
    };

    componentDidMount(){
        axios.get('/api/regist')
        .then( res => {
            console.log(res);
        })
        .catch( error => {
            console.log(error);
        });
    }
    
    render() {
        // const {handlePage} = this.handlePage;
        return (
            <AuthContent title="회원가입">
                <InputWithLabel label="아이디" name="id" placeholder="아이디"  onChange={this.updateInform} />
                <InputWithLabel label="이메일" name="email" placeholder="이메일"  onChange={this.updateInform} />
                <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password" onChange={this.updateInform} />
                <InputWithLabel label="비밀번호 확인" name="password_confirmation" placeholder="비밀번호 확인" type="password"  onChange={this.updateInform} />
                <InputWithLabel label="닉네임" name="nickname" placeholder="닉네임"  onChange={this.updateInform} />
                <SelectWithLabel label="국적" name="country" input={['한국',  '일본', '미국', '중국']}  onChange={this.updateInform} />
                <SelectWithLabel label="성별" name="gender" input={['남자', '여자']} onChange={this.updateInform} />
                {/* radio handle 만들기 */}
                <InputWithLabel label="생년월일" name="birth" type="date" onChange={this.updateInform} />
                <AuthButton onClick={this.handleFormButton}>회원가입</AuthButton>
                <AuthButton onClick={this.handlePageButton}>다음페이지</AuthButton>
                {/* 기피 원재료 선택 */}
                <CheckWithLabel label="빠른 선택" name="fast" type="checkbox" input={['할랄', '비건', '코셔']} onChange={this.updateInform} />
                <CheckWithLabel label="기피원재료" name="material" type="checkbox" input={['계란', '유제품', '고기', '야채', '갑각류']} onClick={this.updateMaterial}/>
                {/* 맛 정보 선택 */}
                <InputWithLabel label="단맛" name="sweet" placeholder="1-5"  onChange={this.updateInform}/>
                <InputWithLabel label="쓴맛" name="bitter" placeholder="1-5"  onChange={this.updateInform} />
                <InputWithLabel label="매운맛" name="hot" placeholder="1-5" onChange={this.updateInform} />
                <InputWithLabel label="신맛" name="sour" placeholder="1-5"  onChange={this.updateInform} />
                <InputWithLabel label="짠맛" name="salty" placeholder="1-5" onChange={this.updateInform} />
                {/* <CheckWithLabel label="빠른 선택" type="checkbox" value="select" input={['할랄', '비건', '코셔']} /> */}
                <AuthLink to="/login" children="로그인"></AuthLink>
                {/* <PageButton>다음</PageButton> */}
            </AuthContent>
        );
    }
}

export default Register;