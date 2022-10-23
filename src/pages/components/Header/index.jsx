import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { changeIdOp, changeOperatorName, changeAds } from '../../../store/actions/chatAction'
import { isAndroid , isIOS, isWindows, isMacOs } from 'react-device-detect' 
import Head from 'next/head'

import {
  BgHeader,
  Content,
  ContentAndroid,
  GridContent,
  GridContentIcons,
  Logo,
  Arrow,
  ArrowWhite,
  Title,
  TitleWhite,
  Movie,
  MovieWhite,
  Tell,
  TellWhite,
  ActiveStatus,
  ActiveStatusWhite,
  Status,
  Container
} from './styles'

const Header = props => {

  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }

  const { updateIdOp, updateNameOperator, updateAds } = props
  const isPlataform = typeof window !== 'undefined' ? navigator.platform : false;

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
      {isIOS ? <>
        <Content>
          <GridContent>
            <Arrow src='/assets/img/seta.svg' alt='seta' />
            <Logo src={logoOperadora} alt='Logo operadora' />
            <Container>
              <Title>{props.store.nomeOperadora}</Title>
              <ActiveStatus>Online</ActiveStatus>
              <Status />
            </Container>
          </GridContent>
          <GridContent>
            <Movie src='/assets/img/video.svg' alt="video" />
            <Tell src='/assets/img/telefonema.svg' alt="telefone" />
          </GridContent>
        </Content>
      </> : null}

      {isAndroid ? <>
        <ContentAndroid>  
          <GridContent>
            <ArrowWhite src='/assets/img/leftarrow.svg' alt='seta' />
            <Logo src={logoOperadora} alt='Logo operadora' />
            <Container>
              <TitleWhite>{props.store.nomeOperadora}</TitleWhite>
              <ActiveStatusWhite>Online</ActiveStatusWhite>
            </Container>
          </GridContent>
          <GridContentIcons>
            <MovieWhite src='/assets/img/movie.svg' alt="video" />
            <TellWhite src='/assets/img/phone.svg' alt="telefone" />
            <Tell src="/assets/img/dots.svg" alt="" />
          </GridContentIcons>
        </ContentAndroid>
      </> : null}

      {isWindows ? <>
        <ContentAndroid>  
          <GridContent>
            <ArrowWhite src='/assets/img/leftarrow.svg' alt='seta' />
            <Logo src={logoOperadora} alt='Logo operadora' />
            <Container>
              <TitleWhite>{props.store.nomeOperadora}</TitleWhite>
              <ActiveStatusWhite>Online</ActiveStatusWhite>
            </Container>
          </GridContent>
          <GridContentIcons>
            <MovieWhite src='/assets/img/movie.svg' alt="video" />
            <TellWhite src='/assets/img/phone.svg' alt="telefone" />
            <Tell src="/assets/img/dots.svg" alt="" />
          </GridContentIcons>
        </ContentAndroid>
      </> : null}

      {isMacOs ? <>
        <ContentAndroid>  
          <GridContent>
            <ArrowWhite src='/assets/img/leftarrow.svg' alt='seta' />
            <Logo src={logoOperadora} alt='Logo operadora' />
            <Container>
              <TitleWhite>{props.store.nomeOperadora}</TitleWhite>
              <ActiveStatusWhite>Online</ActiveStatusWhite>
            </Container>
          </GridContent>
          <GridContentIcons>
            <MovieWhite src='/assets/img/movie.svg' alt="video" />
            <TellWhite src='/assets/img/phone.svg' alt="telefone" />
            <Tell src="/assets/img/dots.svg" alt="" />
          </GridContentIcons>
        </ContentAndroid>
      </> : null}

      {isPlataform === 'linux' ? <>
        <ContentAndroid>  
          <GridContent>
            <ArrowWhite src='/assets/img/leftarrow.svg' alt='seta' />
            <Logo src={logoOperadora} alt='Logo operadora' />
            <Container>
              <TitleWhite>{props.store.nomeOperadora}</TitleWhite>
              <ActiveStatusWhite>Online</ActiveStatusWhite>
            </Container>
          </GridContent>
          <GridContentIcons>
            <MovieWhite src='/assets/img/movie.svg' alt="video" />
            <TellWhite src='/assets/img/phone.svg' alt="telefone" />
            <Tell src="/assets/img/dots.svg" alt="" />
          </GridContentIcons>
        </ContentAndroid>
      </> : null}
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
