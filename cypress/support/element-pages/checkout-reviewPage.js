class Review_Payments {
    validate_shipping = '[data-bind="text: getShippingMethodTitle()"]'
    placeorder_btn = '[title="Place Order"]'
    placeorder_success_msg = '[data-ui-id="page-title-wrapper"]'
}

module.exports = new Review_Payments()