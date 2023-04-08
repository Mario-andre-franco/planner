<template>
  <body>
    <header>
      <div class="text-container">
        <h1 class="h1-large">PLANNER PROFESSORA MARICOTINHA</h1>
      </div>
    </header>
    <br>
    <section>
      <div class="board">
        <div class="dia-da-semana">
          <h2 class="dia">Segunda</h2>
          <Container group-name="aluno"
          @drag-start="handleDragStart('segunda', $event)"
          @drop="handleDrop('segunda', $event)"
          :get-child-payload="getChildPayload"
          :drop-placeholder="{className: 'placeholder'}">

            <Draggable v-for="card in cards" :key="card.id">
              <div class="nome-aluno"> {{ card.nome }} | {{card.horarioAula}} </div>
            </Draggable>
          </Container>  
        </div>    
         
        <div class="dia-da-semana">
          <h2 class="dia">Terça</h2>
          <Container group-name="aluno"
          @drag-start="handleDragStart('terca', $event)"
          @drop="handleDrop('terca', $event)"
          :get-child-payload="getChildPayload"
          :drop-placeholder="{className: 'placeholder'}">

            <Draggable v-for="card in cards" :key="card.id">
              <div class="nome-aluno"> {{ card.text }} | {{card.horario}} </div>
            </Draggable>
          </Container>  
        </div>    
        
        <div class="dia-da-semana">
          <h2 class="dia">Quarta</h2>
          <Container group-name="aluno"
          @drag-start="handleDragStart('quarta', $event)"
          @drop="handleDrop('quarta', $event)"
          :get-child-payload="getChildPayload"
          :drop-placeholder="{className: 'placeholder'}">

            <Draggable v-for="card in cards" :key="card.id">
              <div class="nome-aluno"> {{ card.text }} | {{card.horario}}</div>
            </Draggable>
          </Container>  
        </div>    

        <div class="dia-da-semana">
          <h2 class="dia">Quinta</h2>
          <Container group-name="aluno"
          @drag-start="handleDragStart('quinta', $event)"
          @drop="handleDrop('quinta', $event)"
          :get-child-payload="getChildPayload"
          :drop-placeholder="{className: 'placeholder'}">

            <Draggable v-for="card in cards" :key="card.id">
              <div class="nome-aluno"> {{ card.text }} | {{card.horario}}</div>
            </Draggable>
          </Container>  
        </div>    

        <div class="dia-da-semana">
          <h2 class="dia">Sexta</h2>
          <Container group-name="aluno"
          @drag-start="handleDragStart('sexta', $event)"
          @drop="handleDrop('sexta', $event)"
          :get-child-payload="getChildPayload"
          :drop-placeholder="{className: 'placeholder'}">

            <Draggable v-for="card in cards" :key="card.id">
              <div class="nome-aluno"> {{ card.text }} | {{card.horario}}</div>
              
            </Draggable>
          </Container>  
        </div>    

        <div class="dia-da-semana">
          <h2 class="dia">Sábado</h2>
          <Container group-name="aluno"
          @drag-start="handleDragStart('sabado', $event)"
          @drop="handleDrop('sabado', $event)"
          :get-child-payload="getChildPayload"
          :drop-placeholder="{className: 'placeholder'}">

            <Draggable v-for="card in cards" :key="card.id">
              <div class="nome-aluno"> {{ card.text }} | {{card.horario}}</div>
            </Draggable>
          </Container>  
        </div>    

      </div>
    </section> 
  </body>
</template>

<script>
import axios from 'axios'
import { Container, Draggable } from 'vue-smooth-dnd';
import config from '../config/config.js'

export default {
  name: 'App',
  components: {
    Container,
    Draggable
  },
  data: () => ({
    cards: [],
    dragginCard: {
      lane: '',
      index: -1,
      cardData: {},
    }
  }),
  methods: {
    handleDragStart(lane,dragResult) {
      const { payload, isSource } = dragResult;
      if(isSource) {
        this.dragginCard = {
          lane,
          index: payload.index,
          cardData: {
            ...this.cards[lane][payload.index]
          }
        }
      }
    },
    handleDrop(lane,dropResult) {
      const {removedIndex, addedIndex} = dropResult;
      if(lane == this.dragginCard.lane && removedIndex == addedIndex) {
        return;
      }
      if(removedIndex !== null) {
        this.cards[lane].splice(removedIndex,1);
      }
      if(addedIndex !== null) {
        this.cards[lane].splice(addedIndex, 0, this.dragginCard.cardData)
      }
    },
    getChildPayload(index) {
      return {
        index,
      }
    }
  },
  mounted () {
    axios.get(`${config.apiBaseUrl}/alunos`)
    .then(response => {
      this.cards = response.data
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

  .text-container {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  .h1-large {
    font-size: 3.375rem;
    line-height: 4rem;
    font-weight: 700;
    font-family: "Inter";
    letter-spacing: -0.6px;
  }
  .board {
    display: flex;
    justify-content: flex-start;
    margin: 1.2rem 0.8rem;
    align-items: flex-start;
  }

  @media only screen and (max-width: 768px) {
  .board {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

  .dia {
  color: #000;
  padding: 0.8rem 0.5rem;
  margin-bottom: 0.6rem;
  }
  .dia-da-semana {
    background: var(--color-grey);
    width: 23rem;
    border-radius: 0.8rem;
    box-shadow: 0 0.1rem 0.2rem 0 rgba(33, 33, 33, 0.1);
    margin: 0 0.8rem;
    padding: 0. 0.7rem;
  }

  .nome-aluno {
    background: var(--color-white);
    padding: 1.4rem;
    border-radius: 0.4rem;
    box-shadow: 0 1px rgba(9, 30, 66, 0.25);
    margin-bottom: 0.8rem;
    font-size: 1.2rem;
    cursor: pointer;

  }
</style>
