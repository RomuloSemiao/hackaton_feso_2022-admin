import './Patient.scss';
import { Exclamation } from '../../assets/Exclamation';

const Patient = () => {
  return (
    <div className='Patient'>
      <div className='Patient_div'>
        <Exclamation />
        <div>
          <p className="Patient_text">Sergio da Silva</p>
          <p className="Patient_text">Envio uma consulta rápida 4 dias atrás</p>
        </div>
      </div>
      <div className='Patient_div'>
        <Exclamation />
        <div>
          <p className="Patient_text">Sergio da Silva</p>
          <p className="Patient_text">Envio uma consulta rápida 4 dias atrás</p>
        </div>
      </div>
      <div className='Patient_div'>
        <Exclamation />
        <div>
          <p className="Patient_text">Sergio da Silva</p>
          <p className="Patient_text">Envio uma consulta rápida 4 dias atrás</p>
        </div>
      </div>
    </div>
  )
}

export { Patient }