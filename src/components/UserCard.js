import React, {useState} from "react";
import Input from './Input'


function UserCard() {
    
    const [nameState, setNameState] = useState()

    return(
        <> 
            <div className="kart-main">
                <Input onChange={value => setNameState(value)} />
                
                <div className="kart">
                    <span><b>Kullanıcı Adı:</b> {nameState}</span>
                    <p className="kart__desc">
                        <b>Yorumunuz:</b> "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
                    </p>
                </div>
            </div>

        </>
    )
}

export default UserCard