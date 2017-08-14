const ObjectId = require('mongodb').ObjectID;
const deviceDb = require('../access/deviceDb');

module.exports = Device;

function Device(init) {
    this._id = (init._id) ? new ObjectId(init._id) : null;
    this.testBed = String(init.testBed || '');
    this.domainName = String(init.domainName || '');
    this.metro = String(init.metro || '');
    this.localAs = String(init.localAs || '');
    this.role = String(init.role || '');
}

Device.prototype.save = save;
Device.prototype.getAll = getAll;

function save() {
    return new Promise((resolve, reject) => {
        new deviceDb()
            .save(this)
            .then(resolve)
            .catch(reject);
    });
}

function getAll() {
    return new Promise((resolve, reject) => {
        new deviceDb()
            .findAll()
            .then(resolve)
            .catch(reject);
    });
}