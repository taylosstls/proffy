import React from 'react';
import './styles.css';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list">
      <PageHeader title="Estes são os proffys disponíveis.">

        <form action="" id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input id="subject" type="text" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input id="week_day" type="text" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input id="time" type="text" />
          </div>
        </form>
      </PageHeader>

      <main>
        <TeacherItem />

      </main>
    </div>
  )
}

export default TeacherList;
