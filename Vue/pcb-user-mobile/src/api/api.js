const api={
    CustomerLogin:{
        Login:"/CustomerLogin/Login",
        Register:"/CustomerLogin/Register"
    },
    PcbOrder:{
        Add:"/PcbOrder/Add",
        OrderList:"/PcbOrder/OrderList",
        EngineerOrderList:"/PcbOrder/EngineerOrderList",
        Order:"/PcbOrder/Order",
        Cancel:"/PcbOrder/Cancel",
        Confirm:"/PcbOrder/Confirm",
        ReceiveOrder:"/PcbOrder/ReceiveOrder",
        Evaluate:"/PcbOrder/Evaluate",
        Refuse:"/PcbOrder/Refuse",
        Follow:"/PcbOrder/Follow",
        Finish:"/PcbOrder/Finish",
    },
    UserAddress:{
        Add:"/UserAddress/Add",
        UserAddressList:"/UserAddress/UserAddressList",
        UserAddressByUserCode:"/UserAddress/UserAddressByUserCode",
    },
    EngineerLogin:{
        Login:"/EngineerLogin/Login",
        Register:"/EngineerLogin/Register"
    },
}
export default api;