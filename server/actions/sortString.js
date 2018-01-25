const sortString = require('../pure_logic/sortString');

module.exports = {
  post: (req, res) => {
    res.send(JSON.stringify(sortString(req.body.string)));
  }
}
