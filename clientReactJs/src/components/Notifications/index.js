import React, {Component} from 'react';
import AlertDialogSlide from './../Dialog/index';
//import Button from '@material-ui/core/Button';
class Notification extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            log:[{
                id: 1,
                title: " Cảnh báo ",
                content : "Bạn vui lòng đeo khẩu trang trước khi vào cửa @@"
            },{
                id: 2,
                title: " Thông báo ",
                content : "Hệ thống nhận diện bạn đã có khẩu trang vui lòng thực hiện bước tiếp theo !!"
            },{
                id: 3,
                title: " Thành công ",
                content : "Cửa đã được mở mời bạn vào <3"
            }, {
                id: 4,
                title: " Cảnh báo ",
                content : "Hệ thống phát hiện bạn không đủ điều kiện checkin :(("
            }
            ],
            maskCheck: false
        }
    } 
    handleClose = (params) => {
        this.props.onClickNext(true)
    };  
    showLog = (logs, type, onCountDown) =>{
        var result;
        result = logs.map((log, index) =>{
            if(log.id === type)
                {
                    return (
                        <AlertDialogSlide key = {index}
                        open = {this.props.openLog} 
                        handleClose = {this.handleClose}
                        log = {log}
                        onCountDown = {onCountDown}
                        />
                    )
                }
            else
                return '';
        })
        return result;
    }

    render (){
        var {log} = this.state
        var {id, onCountDown} = this.props
        return (
            <div>
                {this.showLog(log, id, onCountDown)}
            </div>
        );
    }
}

export default Notification