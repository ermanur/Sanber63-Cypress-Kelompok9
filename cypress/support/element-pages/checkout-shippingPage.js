class Shipping {
    shipping_section = '#shipping'

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

    validate_emptyemail_msg = '#customer-email-error'
    validate_emptyfirstname_msg = '[data-bind="text: element.error"]'
    validate_emptylastname_msg = '[class="field-error"]'
    validate_emptystreetaddress_msg = '[data-bind="text: element.error"]'
    validate_emptycity_msg = '[data-bind="text: element.error"]'
    validate_emptystate_msg = '[data-bind="text: element.error"]'
    validate_emptypostcode_msg = '[data-bind="text: element.error"]'
    validate_emptycountry_msg = '[data-bind="text: element.error"]'
    validate_emptyphonenumber_msg = '[data-bind="text: element.error"]'
    validate_emptyship_alert = '[class="message notice"]'
    validate_emptyship_msg = '[data-bind="text: errorValidationMessage()"]'

    validate_invalidpostalcode_msg = '[data-bind="text: element.warn"]'
}
module.exports = new Shipping()