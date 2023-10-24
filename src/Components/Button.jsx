


const Button = ({children, py, px, onClick, type, disabled}) => {
   

    return(
        <div>
            <button className={` bg-[#1E1E1E] text-white ${py} ${px} rounded-lg mt-3 `} onClick={onClick} type={type} disabled={disabled}>{children}</button>
        </div>
    )
}

export default Button;