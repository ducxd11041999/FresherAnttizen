import React, { Component } from 'react';
import { render } from "react-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { withStyles } from '@material-ui/core';
import styles from './Style'
import Checkbox from '@material-ui/core/Checkbox';
import Keyboard from 'react-simple-keyboard';
import 'simple-keyboard/build/css/index.css';
function corrector(value) {
    console.log(`correction ${value}`);
    this.makeCorrection(value);
}
class FormDialog extends React.Component {

    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
        this.state = {
            open: false,
            name: '',
            ages: '',
            heath_dtls: '',
            gender: false,
            cough: false,
            headache: false,
            breath: false,
            tangent: false,
            travel: false,
            fever: false,
            tire:false,
            flagChange: false,
            layoutName: "default",
            value: "",
            open2: false 
        };
    }
    onClearData = () =>{
        this.setState ({
            open: false,
            name: '',
            ages: '0',
            heath_dtls: '',
            gender: false,
            cough: false,
            headache: false,
            breath: false,
            tangent: false,
            flagChange: false
        });
        this.handleClose();
    }
    handleClose = () => {
        this.props.onCloseForm();
    };
    onChange =(event)=>
    {
        var target = event.target
        var name = target.name
        var value = target.value
        this.props.onChangeFlag(true)
        //console.log(name + " " + value)
        //console.log(typeof value)
        if (name ==='cough' || name === 'breath' || name === 'headache' || name === 'tangent')
        {
            value = (value === "true" ? true : false);
        }
        this.setState(
            {
                [name]:value
            })
    }
    onSubmit = (event) =>{
        //console.log("submit")
        event.preventDefault();
        this.props.onInformation(this.state)
        this.onClearData();
    }

    onInputChanged = (data) => {
        this.setState({ input: data });
    }
    onInputSubmitted = (data) => {
        console.log("Input submitted:", data);
    }
    canOpenKeyboard = () => {
        return true;
    }
 
    handleFocus = () =>{
        if(this.canOpenKeyboard()) {
            this.setState({ open2: true });
        }
    }
    
    handleChange= (value) => {
        console.log(value);
        this.setState({ value: value });
    }
    
    handleRequestClose= () => {
        this.setState({ open2: false });
    }
    
    handleInput= (input) => {
        console.log(input);
        var name = 'name'
        this.setState(
            {
                [name]: input
            })
    }
    
    handleError = (error) => {
        let errorText;
        switch (error) {
            case 'required':
                errorText = 'This field is required';
                break;
            case 'invalidSymbol':
                errorText = 'You are tring to enter none number symbol';
                break;
            case 'incompleteNumber':
                errorText = 'Number is incomplete';
                break;
            case 'singleMinus':
                errorText = 'Minus can be use only for negativity';
                break;
            case 'singleFloatingPoint':
                errorText = 'There is already a floating point';
                break;
            case 'singleZero':
                errorText = 'Floating point is expected';
                break;
            case 'min':
                errorText = 'You are tring to enter number less than -10';
                break;
            case 'max':
                errorText = 'You are tring to enter number greater than 12';
                break;
        }
        this.setState({ errorText: errorText });
    }
    
    handleValid= (value) => {
        console.debug(`valid ${value}`);
    }
 
    // componentDidMount() {
    //     setTimeout(() => this.setState({ value: '89' }), 1000);
    // }
    onChange2 = (input) => {
        //console.log("Input changed", input);
        this.setState(
            {
                name:input
            })
    }
    
    onKeyPress = (button) => {
        console.log("Button pressed", button);
    }
    render(){
        const {openForm, classes} = this.props
        // let Keyboard = new Keyboard
    return (
        <div>
            <Dialog open={openForm} onClose={this.handleClose}  
            aria-labelledby="form-dialog-title" 
            fullWidth = {true}
            className = {classes.root}>
                <form className={classes.root} autoComplete="off">
                    <DialogTitle id="form-dialog-title" >
                        <div className={classes.formTitleSize}>
                            KHAI BÁO Y TẾ
                        </div>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText className = {classes.formContentSize}>
                            Vui lòng điền thông tin cá nhân của bạn trong 14 ngày gần đây và chắc chắn thông tin bạn cung cấp hoàn toàn chính xác
                        </DialogContentText>
                                <TextField
                                    variant = "filled"
                                    autoFocus
                                    margin="dense"
                                    name="name"
                                    label="Họ & Tên"
                                    type="text"
                                    value = {this.state.name}
                                    fullWidth = {true}
                                    onChange = {this.onChange}
                                    inputProps={{
                                        style: {fontSize: "15px"} 
                                    }}
                                    InputLabelProps={{style: {fontSize: "15px"}}} // font size of input label
                                    required           
                                />
                                {/* <Keyboard
                                    name='name'
                                    onChange={input =>this.onChange2(input)}
                                    onKeyPress={button => this.onKeyPress(button)}  
                                /> */}
                                <TextField
                                    variant = "filled"
                                    autoFocus
                                    margin="dense"
                                    name="ages"
                                    type="text"
                                    label ="Số điện thoại"
                                    value = {this.state.ages}
                                    onChange = {this.onChange}
                                    inputProps={{
                                        style: {fontSize: "15px"} 
                                    }}
                                    InputLabelProps={{style: {fontSize: "15px"}}} // font size of input label
                                    fullWidth
                                    required
                                />
                        <span className = {classes.pl10} style={{ fontSize: '15px', color : "red" }}>Giới tính</span>
                        <br />
                        <RadioGroup aria-label="gender" 
                            name="gender" value={this.state.gender}
                            onChange={this.onChange} 
                            required
                            className = {classes.pl10}
                        >
                            <FormControlLabel value= "false" 
                                checked ={this.state.gender === "false"} 
                                control={<Radio />} 
                                label={<span style={{ fontSize: '15px' }}>Nữ</span>}
                            />
                            <FormControlLabel value="true" 
                                checked ={this.state.gender === "true"} control={<Radio />} 
                                label={<span style={{ fontSize: '15px' }}>Nam</span>} 
                            />
                        </RadioGroup>
                        <span className = {classes.pl10} style={{ fontSize: '15px', color : "red" }}>Bạn có các trường hợp sau?</span>
                        <br />
                        <FormControlLabel
                            control={
                                <Checkbox />
                            }
                            name="cough" 
                            onChange={this.onChange}
                            className = {classes.pl10}
                            value = {!this.state.cough}
                            label={<span style={{ fontSize: '15px' }}>Ho khan</span>}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox />
                            }
                            name="headache" 
                            onChange={this.onChange}
                            className = {classes.pl10}
                            value = {!this.state.headache}
                            label={<span style={{ fontSize: '15px' }}>Nhứt đầu</span>}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox />
                            }
                            name="breath" 
                            onChange={this.onChange}
                            className = {classes.pl10}
                            value = {!this.state.breath}
                            label={<span style={{ fontSize: '15px' }}>Khó thở</span>}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox />
                            }
                            name="tire" 
                            onChange={this.onChange}
                            className = {classes.pl10}
                            value = {!this.state.tire}
                            label={<span style={{ fontSize: '15px' }}>Mệt mõi</span>}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox />
                            }
                            name="fever" 
                            onChange={this.onChange}
                            className = {classes.pl10}
                            value = {!this.state.fever}
                            label={<span style={{ fontSize: '15px' }}>Sốt</span>}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox />
                            }
                            name="tangent" 
                            onChange={this.onChange}
                            className = {classes.pl10}
                            value = {!this.state.tangent}
                            label={<span style={{ fontSize: '15px' }}>Tiếp xúc với bệnh nhân</span>}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox />
                            }
                            name="travel" 
                            onChange={this.onChange}
                            className = {classes.pl10}
                            value = {!this.state.travel}
                            label={<span style={{ fontSize: '15px' }}>Đã từng di chuyển qua nơi có dịch</span>}
                        />
                        <br /> 
                    </DialogContent>
                    <DialogActions>
                        <Button variant = "contained" type="reset"  className = {classes.zoomButton} onClick={this.onClearData} color="primary">
                            Cancel
                        </Button>
                        <Button variant = "contained" type="submit"  className = {classes.zoomButton} color="secondary"  onClick={e => this.onSubmit(e)}>
                            Submit
                        </Button>
                    </DialogActions>
                    </form>
            </Dialog>
        </div>
    );
    }
}

export default withStyles(styles)(FormDialog)