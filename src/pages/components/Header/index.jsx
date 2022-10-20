import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { changeIdOp, changeOperatorName, changeAds } from '../../../store/actions/chatAction'
import Head from 'next/head'

import {
  BgHeader,
  Content,
  GridContent,
  Logo,
  Arrow,
  Title,
  Movie,
  Tell,
  ActiveStatus,
  Status
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

  const logoOperadora = `https://app.leadmark.com.br/themes/now/img/operadoras/${props.store.idOp}.png`

  return (
    <BgHeader>
      <Head>
        <title>{`Cotador Virtual ${props.store.nomeOperadora}`}</title>
      </Head>
      <Content>
        <GridContent>
          <Arrow src='/assets/img/seta.svg' alt='seta' />
          <Logo src={logoOperadora} alt='Logo operadora' />
          <div>
            <Title>{props.store.nomeOperadora}</Title>
            <ActiveStatus>Online</ActiveStatus>
            <Status />
          </div>
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
