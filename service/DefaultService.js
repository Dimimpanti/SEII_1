'use strict';


/**
 *
 * basket_id Integer 
 * returns inline_response_default_6
 **/
exports.basketBasket_idGET = function(basket_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * basket_post_request_body Basket_post_request_body_1 
 * returns inline_response_default_1
 **/
exports.basketPOST = function(basket_post_request_body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "blank": false,
  "bytes": [
    91,
    123,
    112,
    114,
    111,
    100,
    117,
    99,
    116,
    32,
    105,
    100,
    115,
    61,
    91,
    49,
    52,
    53,
    53,
    54,
    44,
    32,
    49,
    52,
    55,
    55,
    55,
    44,
    32,
    49,
    50,
    48,
    48,
    49,
    44,
    32,
    49,
    50,
    52,
    53,
    49,
    93,
    44,
    32,
    113,
    117,
    97,
    110,
    116,
    105,
    116,
    105,
    101,
    115,
    61,
    91,
    49,
    44,
    32,
    49,
    44,
    32,
    49,
    44,
    32,
    50,
    93,
    44,
    32,
    98,
    97,
    115,
    107,
    101,
    116,
    32,
    105,
    100,
    61,
    49,
    125,
    93
  ],
  "empty": false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * basket_put_request_body Basket_put_request_body_1 
 * returns inline_response_default
 **/
exports.basketPUT = function(basket_put_request_body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "blank": false,
  "bytes": [
    91,
    123,
    112,
    114,
    111,
    100,
    117,
    99,
    116,
    32,
    105,
    100,
    115,
    61,
    91,
    49,
    44,
    32,
    52,
    44,
    32,
    55,
    44,
    32,
    55,
    44,
    32,
    55,
    93,
    44,
    32,
    113,
    117,
    97,
    110,
    116,
    105,
    116,
    121,
    61,
    52,
    125,
    93
  ],
  "empty": false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * order_id Integer 
 * returns Object
 **/
exports.orderOrder_idDELETE = function(order_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "blank": false,
  "bytes": [
    123,
    125
  ],
  "empty": false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * order_id Integer 
 * returns inline_response_default_2
 **/
exports.orderOrder_idGET = function(order_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "blank": false,
  "bytes": [
    91,
    123,
    112,
    114,
    111,
    100,
    117,
    99,
    116,
    32,
    110,
    97,
    109,
    101,
    115,
    61,
    91,
    67,
    104,
    97,
    105,
    114,
    44,
    32,
    75,
    101,
    121,
    98,
    111,
    97,
    114,
    100,
    44,
    32,
    68,
    101,
    108,
    108,
    32,
    76,
    97,
    112,
    116,
    111,
    112,
    93,
    44,
    32,
    112,
    114,
    111,
    100,
    117,
    99,
    116,
    32,
    100,
    101,
    115,
    99,
    114,
    105,
    112,
    116,
    105,
    111,
    110,
    115,
    61,
    91,
    77,
    97,
    100,
    101,
    32,
    105,
    110,
    32,
    83,
    116,
    111,
    99,
    107,
    104,
    111,
    108,
    109,
    44,
    32,
    77,
    101,
    99,
    104,
    97,
    110,
    105,
    99,
    97,
    108,
    44,
    32,
    73,
    80,
    83,
    32,
    83,
    99,
    114,
    101,
    101,
    110,
    93,
    125,
    93
  ],
  "empty": false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * order_id Integer 
 * order_put_request_body Order_put_request_body_1  (optional)
 * returns Object
 **/
exports.orderOrder_idPUT = function(order_id,order_put_request_body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "blank": false,
  "bytes": [
    123,
    125
  ],
  "empty": false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * -  Possible payment options are 'credit', 'cash', 'paypal'
 *
 * order_id Integer 
 * payment_post_request_body Payment_post_request_body_1  (optional)
 * returns Object
 **/
exports.orderOrder_idPaymentPOST = function(order_id,payment_post_request_body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "blank": false,
  "bytes": [
    123,
    125
  ],
  "empty": false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * order document File 
 * returns Object
 **/
exports.orderPOST = function(order document) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "blank": false,
  "bytes": [
    123,
    125
  ],
  "empty": false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * name String  (optional)
 * category String  (optional)
 * returns product_post_request_body_1
 **/
exports.productDELETE = function(name,category) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * product_post_request_body Product_post_request_body_1  (optional)
 * returns product_post_request_body_1
 **/
exports.productPOST = function(product_post_request_body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * product_put_request_body Product_put_request_body_1  (optional)
 * returns inline_response_default_4
 **/
exports.productPUT = function(product_put_request_body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "blank": false,
  "bytes": [
    91,
    123,
    110,
    97,
    109,
    101,
    61,
    98,
    97,
    103,
    44,
    32,
    100,
    101,
    115,
    99,
    114,
    105,
    112,
    116,
    105,
    111,
    110,
    61,
    115,
    109,
    97,
    108,
    108,
    32,
    98,
    97,
    103,
    44,
    32,
    99,
    97,
    116,
    101,
    103,
    111,
    114,
    121,
    61,
    115,
    112,
    111,
    114,
    116,
    115,
    125,
    93
  ],
  "empty": false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * product_id Integer 
 * returns inline_response_default_3
 **/
exports.productProduct_idGET = function(product_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * -  The user is able to search for products in the website using name and/or category filter, view their general details and choose to view their  specific details
 *
 * name String 
 * category String 
 * returns inline_response_default_5
 **/
exports.searchGET = function(name,category) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "blank": false,
  "bytes": [
    91,
    123,
    110,
    97,
    109,
    101,
    61,
    107,
    101,
    121,
    98,
    111,
    97,
    114,
    100,
    44,
    32,
    112,
    114,
    105,
    99,
    101,
    61,
    54,
    57,
    46,
    57,
    57,
    125,
    93
  ],
  "empty": false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

