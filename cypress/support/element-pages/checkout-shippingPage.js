class Shipping {
    emailaddress = '#customer-email'
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
    next_btn = '[data-role="opc-continue"]'
    ship_flatrate = '[name="ko_unique_1"]'
    ship_bestway = '[name="ko_unique_2"]'

    password = '#customer-password'
    haveaccount_msg = '[class="note"]'
    haveaccount_login_btn = '[data-action="checkout-method-login"]'
    validate_newaddress_btn = '[data-bind="click: showFormPopUp, visible: !isNewAddressAdded()"]'
}
module.exports = new Shipping()