var mongoose    = require('../mongoose.config');
var DoctorSchema 	= mongoose.model('Doctor');
var DoctorController = function() {

    this.add = function(userInstance) {
        return new Promise((resolve, reject) => {
            var doctor = new DoctorSchema({
                name: userInstance.name,
                nic: userInstance.nic,
                age: userInstance.age,
                address: userInstance.address,
                telephone: userInstance.telephone,
                specialty: userInstance.specialty,
                priority_status: userInstance.priority_status
            })
            doctor.save().then(() => {
            resolve({'status': 200, 'message':'added new user'});
    }).catch(err => {
            reject({'status': 404, 'message':'err:-'+err});
    })
    })
    }

    this.getAll = function() {
        return new Promise((resolve, reject) => {
            DoctorSchema.find().exec().then(data => {
            resolve({'status': 200, 'message':'get all data', 'data': data});
    }).catch(err => {
            reject({'status': 404, 'message':'err:-'+err});
    })
    })
    }

    this.getSingle = function(id) {
        return new Promise((resolve, reject) => {
            DoctorSchema.find({_id: id}).exec().then(data => {
            resolve({'status': 200, 'message':'get single data', 'data': data});
    }).catch(err => {
            reject({'status': 404, 'message':'err:-'+err});
    })
    })
    }

    this.update = function(id, updateData) {
        return new Promise((resolve, reject) => {
            DoctorSchema.update({_id: id}, updateData).then(() => {
            resolve({'status': 200, 'message':'update user'});
    }).catch(err => {
            reject({'status': 404, 'message':'err:-'+err});
    })
    })
    }

    this.delete = function(id) {
        return new Promise((resolve, reject) => {
            DoctorSchema.remove({_id: id}).then(() => {
            resolve({'status': 200, 'message':'delete user'});
    }).catch(err => {
            reject({'status': 404, 'message':'err:-'+err});
    })
    })
    }

}

module.exports = new DoctorController();