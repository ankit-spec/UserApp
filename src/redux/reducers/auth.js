import {PHONE_SIGNIN, REGISTER, VERIFY_OTP} from '../actions/auth';
const initialState = {
  phone: '',
  otp: '',
  token: '',
  firsttime: false,
  firsttimeinapp:true,
  data:[],
  id:''
};

export default (state = initialState, action) => {
 switch (action.type) {
    case PHONE_SIGNIN:
      return {
        phone: action.phone,
        otp: action.otp,
      };
    case VERIFY_OTP:
      return {
        token: action.token,
        firsttime: action.firsttime,
      };
      case REGISTER:
        return{
          firsttimeinapp:action.firsttimeinapp,
          id:action.id,
          data:action.data
        }
    default:
      return {...state};
  }
};
