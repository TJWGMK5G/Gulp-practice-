// Способ Фрилансера
// import del from "del";
// export const reset = () => {
//     return del(app.path.clean);
// }

// 2-ой способ
// import {deleteAsync}  from "del";
// export const reset = () => {
//     return deleteAsync(app.path.clean);
// }

// 3-ий способ
import {deleteAsync} from "del"
export const reset = () => {
    return deleteAsync(['dist'])
}