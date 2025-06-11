jQuery(document).ready(function($) {

    $(document).on('click', '#search-filter-results-3437 .form-reset', function(){
        $('[data-sf-form-id="3437"] .sf-field-taxonomy-location input[type="text"]')[0].required = false;
        $(this).parents('.search-filter-results').prev()[0].reset();
        $(this).parents('.search-filter-results').prev().find('input[type="submit"]').click();
        $(this).parents('.search-filter-results').html('');
        $('[data-sf-form-id="3437"] .sf-field-taxonomy-location input[type="text"]')[0].required = true;
        return false;
    });

    //detects the start of an ajax request being made
    $(document).on("sf:ajaxstart", ".searchandfilter[data-sf-form-id=\"3437\"]", function(){
        console.log($(this).next('.search-filter-results').html());
        if ($(this).next('.search-filter-results').html() != '') {
            $(this).parents('.search-filter-results').html('');
        }
    });

    $(document).on("sf:ajaxfinish", ".searchandfilter[data-sf-form-id=\"3437\"]", function(){
        $(this).parents('.adventure-compass-block').toggleClass('has-results');
        // adventureCompassAutocompleteField();
    });

    adventureCompassAutocompleteField();

    function adventureCompassAutocompleteField() {
        $('[data-sf-form-id="3437"] .sf-field-taxonomy-location').addClass('ui-front')
        $('[data-sf-form-id="3437"] .sf-field-taxonomy-location').append('<input type="text" placeholder="Type your Location" class="adventureCompassLocation" required>');
    }

    $('.adventureCompassLocation').autocomplete({
        appendTo: null,
        minLength: 3,
        source: function(request, response) {
            $.ajax({
                dataType: 'json',
                url: ajax_obj.ajax_url,
                data: {
                    term: request.term,
                    action: 'adventureCompassLocationSearch',
                    security: ajax_obj.ajax_nonce,
                },
                success: function(data) {
                    response(data);
                },
            });
        },
        select: function(event, ui) {
            $(this).parent().find('.sf-input-select').val(ui.item.terms).change();
        },
    });

    $(document).on('click', '.button[href="#adventureCompassPopup"]', function(){
        $('.ava-compass-btn').click();
        return false;
    });
});