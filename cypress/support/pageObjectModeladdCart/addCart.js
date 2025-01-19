class addCart{
    delete_btl = ':nth-child(4) > .item-actions > td > .actions-toolbar > .action-delete'
    cart = '.showcart > .counter'
    update_btl = ':nth-child(4) > .item-actions > td > .actions-toolbar > .action-edit'
    update_tee = ':nth-child(3) > .item-actions > td > .actions-toolbar > .action-edit'
    qty = '#qty'
    update_btn = '#product-updatecart-button > span'
    success_msg = '.message-success'
    error_msg = '.message-error'
    color = '#option-label-color-93-item-56'
    color1 = '#option-label-color-93-item-50'
    errorMsgField = 'div[id^="super_attribute\[93\]-error"]'
    size = '#option-label-size-143-item-167'
    size1 = '#option-label-size-143-item-166'
    errorMsgSize = 'div[id^="super_attribute\[143\]-error"]'
}
module.exports = new addCart()