var mongoose 		= require('mongoose');
const Schema        = mongoose.Schema;

const PatientSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    nic: {
        type: String,
        require: true
    },
    age: {
        type: int,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    guardian: {
        type: String,
        require: true
    },
    condition: {
        type: String,
        require: true
    },
    priority: {
        type: String,
        require: true
    },
    previous_medical_history:{
        type: String,
        require: false
    }
});

const DoctorSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    nic: {
        type: String,
        require: true
    },
    age: {
        type: int,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    telephone: {
        type: String,
        require: true
    },
    specialty: {
        type: String,
        require: true
    },
    priority_status: {
        type: String,
        require: true
    }
});

const NurseSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    nic: {
        type: String,
        require: true
    },
    age: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    ward: {
        type: String,
        require: true
    },
    priority_status: {
        type: String,
        require: true
    }
});

const AttendantSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    nic: {
        type: String,
        require: true
    },
    age: {
        type: int,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    ward: {
        type: String,
        require: true
    }
});

const MachineSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    }
});

const WardSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    number: {
        type: String,
        require: true
    }
});

const Condt_trtmntScehma = new Schema({
    condition_name: {
        type: String,
        require: true
    },
    treatment: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    }
});

const TestSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    roomNo: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    }
});

const DrugSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    prescribed_for: {
        type: String,
        require: true
    }
});

const BillSchema = new Schema({
    patient_name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    },
    treatments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Condition_Treatment'
    },
    tests: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Test'
    },
    drugs: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Drug'
    },
    subtotal: {
        type: String,
        require: true
    }
});


mongoose.model('Patient', PatientSchema);
mongoose.model('Doctor', DoctorSchema);
mongoose.model('Nurse', NurseSchema);
mongoose.model('Attendant', AttendantSchema);
mongoose.model('Machine', MachineSchema);
mongoose.model('Ward', WardSchema);
mongoose.model('Condition_Treatment', Condt_trtmntScehma);
mongoose.model('Test', TestSchema);
mongoose.model('Drug', DrugSchema);
mongoose.model('Bill', BillSchema);

mongoose.connect('mongodb://localhost:27017/hospital', (err) => {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('Connected to the DB');
});

module.exports = mongoose;