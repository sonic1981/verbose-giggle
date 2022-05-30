import { textBoxStyle } from '../shared/tailwind-consts'

export default function Buiding() {

    const inputCss = 'grid grid-cols-4 p-2';
    const buttonCss = 'bg-brand-primary hover:cursor-pointer self-start py-px px-5 text-white rounded-lg';

    return (<>
    <h1>Update the below values of this building:</h1>
    <form className='flex flex-col'>
        <label className={inputCss}>Building name: <input type="text" className={textBoxStyle} name="buildingName" /></label>
        <label className={inputCss}>Width: <input type="text" className={textBoxStyle} name="buildingWidth" /></label>
        <label className={inputCss}>Height: <input type="text" className={textBoxStyle} name="buildingHeight" /></label>
        <label className={inputCss}>Date added: <input type="date" className={textBoxStyle} name="dateAdded" /></label>
        <input type="submit" className={buttonCss}></input>
    </form>
    </>);
}