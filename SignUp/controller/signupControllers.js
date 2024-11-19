import moduleName from '../services/index';
const signupController = (req, res) => {
    let dataobj;
    const { name, email, password } = (dataobj = req.body);
    ServiceWorkerRegistration.signupServices.signupController(dataobj, res);
};
export default { signupController };