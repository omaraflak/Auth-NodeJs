module.exports.create = (status, result) => {
    return {
        status: status,
        result: result
    };
};

module.exports.SUCCESS = 'success';
module.exports.ERROR = 'error';
