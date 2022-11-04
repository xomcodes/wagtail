import $ from 'jquery'
/** 
 * This is a function initTagField
 * @function
 * @param {number} id - The object id.
 * @param {string} autocompleteUrl - 
  The autocompleted Url.
 * @param {object} options - Other 
  options passed to initTagField
*/

function initTagField(id: number, autocompleteUrl: string, options: object) {
    const finalOptions = {
      autocomplete: { source: autocompleteUrl },
      preprocessTag(val) {
        // Double quote a tag if it contains a space
        // and if it isn't already quoted.
        if (val && val[0] !== '"' && val.indexOf(' ') > -1) {
          return '"' + val + '"';
        }
  
        return val;
      },
      ...options,
    };
  
    $('#' + id).tagit(finalOptions);
  }

  window.initTagField = initTagField;