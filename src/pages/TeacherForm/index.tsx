import React, { useState } from 'react';
import newId from '../../utils/newId';

import './styles.css';

import warningIcon from '../../assets/images/icons/warning.svg';
import trashIcon from '../../assets/images/icons/trash.svg';
import PageHeader from '../../components/PageHeader';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';

const TeacherForm: React.FC = () => {
  const [scheduleItems, setScheduleItems] = useState([
    { id: newId(), week_day: 0, from: '', to: '' }
  ])


  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { id: newId(), week_day: 0, from: '', to: '' }
    ]);
  }

  function removeScheduleItem(id: string) {
    const newScheduleItems = scheduleItems.filter((item) => item.id !== id);

    setScheduleItems(newScheduleItems);
  }

  return (
    <div id="page-teacher-form">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição" />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
          <Textarea name="bio" label="Biografia" />

        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ed. Física', label: 'Ed. Física' },
              { value: 'Português', label: 'Português' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Física', label: 'Física' },
              { value: 'História', label: 'História' },
              { value: 'Química', label: 'Química' },
            ]} />
          <Input name="cost" label="Custo da sua hora por aula" />

        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewScheduleItem}>
              + Novo horário
            </button>
          </legend>

          {scheduleItems.map(scheduleItem => {
            return (
              <div key={scheduleItem.id} className="schedule-item">
                <Select
                  name="week_day"
                  label="Dia da semana"
                  options={[
                    { value: '0', label: 'Domingo' },
                    { value: '1', label: 'Segunda-feira' },
                    { value: '2', label: 'Terça-feira' },
                    { value: '3', label: 'Quarta-feira' },
                    { value: '4', label: 'Quinta-feira' },
                    { value: '5', label: 'Sexta-feira' },
                    { value: '6', label: 'Sábado' },

                  ]} />
                <Input name="from" label="Das" type="time" />
                <Input name="to" label="Até" type="time" />

                {scheduleItems.length >= 2 && (
                  <button type="button" onClick={() => removeScheduleItem(scheduleItem.id)}>
                    <img src={trashIcon} alt="Excluir" />
                  </button>
                )}
              </div>
            )
          })}


        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>

          <button type="button">
            Salvar cadastro
          </button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm;
