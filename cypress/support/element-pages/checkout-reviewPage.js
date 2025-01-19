class Review_Payments {
    validate_shipping = '[data-bind="text: getShippingMethodTitle()"]'
    placeorder_btn = '[title="Place Order"]'
    placeorder_success_msg = '[data-ui-id="page-title-wrapper"]'

    differentaddress_checkbox = '#billing-address-same-as-shipping-checkmo'
    firstname = '[name="firstname"]'
    lastname = '[name="lastname"]'
    company = '[name="company"]'
    streetaddress1 = '[name="street[0]"]'
    streetaddress2 = '[name="street[1]"]'
    streetaddress3 = '[name="street[2]"]'
    city = '[name="city"]'
    state = '[name="region_id"]'
    postcode = '[name="postcode"]'
    country = '[name="country_id"]'
    phonenumber = '[name="telephone"]'
    updateaddress_btn = '[data-bind="click: updateAddress"]'
    cancel_btn = '[class="action action-cancel"]'
    edit_btn = '[class="action action-edit-address"]'

    applydiscountcode_btn = '[class="payment-option-title field choice"]'
    discountcode = '#discount-code'
    applydiscount_btn = '[class="action action-apply"]'
    validate_invaliddiscount_alert = '[role="alert"]'
    validate_invaliddiscount_msg = '[data-ui-id="checkout-cart-validationmessages-message-error"]'
}

module.exports = new Review_Payments()