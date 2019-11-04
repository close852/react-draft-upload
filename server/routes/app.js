import express from 'express'
const router = express.Router();

//결재문서 상신, copy기안, 임시저장
router.get('/', async (req, res) => {
    // 양식별로 항목을 저장해두어야 함.
    // 저장된 항목들을 가져옴...
    // const {
    //     title,
    //     content,
    //     user_id,
    //     action
    // } = req.body;
    // let app_line = [
    //     { auth_id: 1, auth_type: 'USER', action_type: 'APP', app_status: 'READY', taskno: 1, sortno: 1 },
    //     { auth_id: 1, auth_type: 'USER', action_type: 'APP', app_status: 'READY', taskno: 1, sortno: 2 }
    // ]
    let data = 'hi'
    return res.json({
        data: data
    })
});
//결재문서 상신, copy기안, 임시저장
router.post('/', async (req, res) => {
    // 양식별로 항목을 저장해두어야 함.
    // 저장된 항목들을 가져옴...
    // const {
    //     title,
    //     content,
    //     user_id,
    //     action
    // } = req.body;
    // let app_line = [
    //     { auth_id: 1, auth_type: 'USER', action_type: 'APP', app_status: 'READY', taskno: 1, sortno: 1 },
    //     { auth_id: 1, auth_type: 'USER', action_type: 'APP', app_status: 'READY', taskno: 1, sortno: 2 }
    // ]
    let data = 'hi'
    return res.json({
        data: data
    })
});

export default router;