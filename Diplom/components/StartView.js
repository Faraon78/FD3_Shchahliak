import React from 'react';
import PropTypes from 'prop-types';

import './StartView.css';

class StartView extends React.PureComponent {
    render() {
        return (
            <div className="Start">
                <h3>Добро пожаловать на KidsParty.by</h3>
                <span>
                    На нашем портале Вы сможете подобрать все необходимые услуги для проведения детского праздника в городе Минске.                     
                </span>
                <br/><br/>
                <span>
                    Мы предложим Вам детские центры и спортивные площадки, услуги аниматоров и фотографов, поможем заказать торт и многое другое..
               </span>
               <br/><br/>
                <span>
                    Выберите интересующие Вас услуги, выберите дату Вашего мероприятия и заполните Ваши данные для обратной связи. 
                    
               </span>
               <br/><br/>
                <span>
                    
                    Организаторы обязательно свяжутся с Вами для согласования деталей заказа.
               </span>
            </div>
            
        )

}

}

export default StartView;
