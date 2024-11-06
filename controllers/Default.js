'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.basketBasket_idGET = function basketBasket_idGET (req, res, next) {
  var basket_id = req.swagger.params['basket_id'].value;
  Default.basketBasket_idGET(basket_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.basketPOST = function basketPOST (req, res, next) {
  var basket_post_request_body = req.swagger.params['basket_post_request_body'].value;
  Default.basketPOST(basket_post_request_body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.basketPUT = function basketPUT (req, res, next) {
  var basket_put_request_body = req.swagger.params['basket_put_request_body'].value;
  Default.basketPUT(basket_put_request_body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.orderOrder_idDELETE = function orderOrder_idDELETE (req, res, next) {
  var order_id = req.swagger.params['order_id'].value;
  Default.orderOrder_idDELETE(order_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.orderOrder_idGET = function orderOrder_idGET (req, res, next) {
  var order_id = req.swagger.params['order_id'].value;
  Default.orderOrder_idGET(order_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.orderOrder_idPUT = function orderOrder_idPUT (req, res, next) {
  var order_id = req.swagger.params['order_id'].value;
  var order_put_request_body = req.swagger.params['order_put_request_body'].value;
  Default.orderOrder_idPUT(order_id,order_put_request_body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.orderOrder_idPaymentPOST = function orderOrder_idPaymentPOST (req, res, next) {
  var order_id = req.swagger.params['order_id'].value;
  var payment_post_request_body = req.swagger.params['payment_post_request_body'].value;
  Default.orderOrder_idPaymentPOST(order_id,payment_post_request_body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.orderPOST = function orderPOST (req, res, next) {
  var order document = req.swagger.params['order document'].value;
  Default.orderPOST(order document)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productDELETE = function productDELETE (req, res, next) {
  var name = req.swagger.params['name'].value;
  var category = req.swagger.params['category'].value;
  Default.productDELETE(name,category)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productPOST = function productPOST (req, res, next) {
  var product_post_request_body = req.swagger.params['product_post_request_body'].value;
  Default.productPOST(product_post_request_body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productPUT = function productPUT (req, res, next) {
  var product_put_request_body = req.swagger.params['product_put_request_body'].value;
  Default.productPUT(product_put_request_body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productProduct_idGET = function productProduct_idGET (req, res, next) {
  var product_id = req.swagger.params['product_id'].value;
  Default.productProduct_idGET(product_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchGET = function searchGET (req, res, next) {
  var name = req.swagger.params['name'].value;
  var category = req.swagger.params['category'].value;
  Default.searchGET(name,category)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
