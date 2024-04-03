import { useState } from 'react';
import '../css/Menu.css'
import '../css/Items.css'

export default function Menu() {
    const [rateComida, setRateComida] = useState(3);
    const [suggestionComida, setSuggestionComida] = useState('');
    const [ratesLista, setRatesLista] = useState([]);
    const [telaInicial, setTelaInicial] = useState(true);
    const [data, setData] = useState('');

    const enviarFormulario = () => {
        setTelaInicial(false);
        let sugestaoFinal = suggestionComida;
        let [ano, mes, dia] = data.split('-');
        let dataEscolhida = `${dia}/${mes}/${ano}`;

        if (sugestaoFinal === '') {
            sugestaoFinal = 'Nenhuma sugestão';
        }
        setRatesLista([ ...ratesLista,{ rate: rateComida, suggestion: sugestaoFinal, date: dataEscolhida }]);

        setSuggestionComida('');
        setData('');
        setRateComida(3);
    }

    const retornarInicio = () => {
        setTelaInicial(true);
    }

    return (
        <div className='Menu'>
                {telaInicial ? (
                    <div className='Card--Home'>
                        <h2 className='Card__topic'>Avalie a comida (1 - 5)</h2>

                        <h2 className='Card__topic--rate'>{rateComida} estrelas</h2>
                        <input className='Card__input--rate' min='1' max='5' type='range' onChange={(e) => setRateComida(e.target.value)} value={rateComida} required/>

                        <h2 className='Card__topic--date'>Data de hoje</h2>
                        <input className='Card__input--date' type='date' value={data} onChange={(e) => setData(e.target.value)} required/>

                        <h2 className='Card__topic'>O que poderia melhorar o cardápio?</h2>
                        <textarea className='Card__input--menu' onChange={(e) => setSuggestionComida(e.target.value)} value={suggestionComida} name='sugestaoCardapio' cols='20' rows='5' placeholder='Digite sua opinião'/>

                        <button className='Card__button' type='submit' onClick={enviarFormulario}>Finalizar avaliação</button>
                    </div>
                ) : (
                    <>
                        <div className='Card--List'>
                            <div className='Card--Item'>
                                {ratesLista.map((rate, index) => {
                                    return (
                                    <div className='Items' key={index}>
                                        <h2 className='Items__date'>Data: {rate.date}</h2>
                                        <h2 className='Items__rates'>Avaliação: {rate.rate} estrelas</h2>
                                        <h2 className='Items__suggestion'>Sugestão: {rate.suggestion}</h2>
                                    </div>
                                    )
                                })}
                            </div>
                            <button className='homeButton' onClick={retornarInicio}>Retornar ao início</button>
                        </div>
                    </>
                )}
        </div>
    )
}