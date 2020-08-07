import React from 'react';
import './styles.css';

import Input from '../../components/Input';
import Select from '../../components/Select';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

const TeacherList: React.FC = () => (
  <div id="page-teacher-list">
    <PageHeader title="Estes são os proffys disponíveis.">
      <form action="" id="search-teachers">
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
          ]}
        />

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
          ]}
        />
        <Input name="time" label="Hora" type="time" />
      </form>
    </PageHeader>

    <main>
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
    </main>
  </div>
);

export default TeacherList;
