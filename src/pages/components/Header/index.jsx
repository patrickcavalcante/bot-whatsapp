import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { changeIdOp, changeOperatorName, changeAds } from '../../../store/actions/chatAction'

import {
  BgHeader,
  Content,
  GridContent,
  Logo,
  Arrow,
  Title,
  Movie,
  Tell
} from './styles'

const Header = props => {

  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }

  const { updateIdOp, updateNameOperator, updateAds } = props

  useEffect(() => {
    var query = location.search.slice(1);
    var partes = query.split('&');
    var data = {};
    partes.forEach(parte=> {
    var chaveValor = parte.split('=');
    var chave = chaveValor[0].replace('-', '');
    var valor = chaveValor[1] ? decodeURI(chaveValor[1].replace(/\+/g, ' ')) : '' ;
    data[chave] = valor.capitalize();
    });

    console.log(data)

    if(data.idOp) {
      updateIdOp(+data.idOp)
    }

    if(data.nomeOperadora) {
      updateNameOperator(data.nomeOperadora)
    }

    if(data.ads) {
      updateAds(+data.ads)
    }

  }, [updateIdOp, updateNameOperator, updateAds]);

  console.log(props)

  const logoOperadora = `https://app.leadmark.com.br/themes/now/img/operadoras/${props.store.idOp}.png`

  return (
    <BgHeader>
      <Content>
        <GridContent>
          <Arrow src='/assets/img/seta.svg' alt='seta' />
          <Logo src={logoOperadora} alt='Logo operadora' />
          <Title>{props.store.nomeOperadora}</Title>
        </GridContent>
        <GridContent>
          <Movie src='/assets/img/video.svg' alt="video" />
          <Tell src='/assets/img/telefonema.svg' alt="telefone" />
        </GridContent>
      </Content>
    </BgHeader>
  )
}

const mapStateToProps = state => {
  return {
    store: state.chatContext
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateIdOp (idOp) {
      const action = changeIdOp(idOp)
      dispatch(action)
    },
    updateNameOperator (nomeOperadora) {
      const action = changeOperatorName(nomeOperadora)
      dispatch(action)
    },
    updateAds (ads) {
      const action = changeAds(ads)
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
