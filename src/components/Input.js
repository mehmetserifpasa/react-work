function Input(props) {
    
    return(
    <>
        <section>
            <div className="container">
                <div className="input">
                    <input 
                        className="input__text" 
                        placeholder="Kullanıcı Adınız..."
                        onChange={(e) => props.onChange(e.target.value)} 
                    />
                </div>
            </div>
        </section>      
    </>
    )
};

export default Input;