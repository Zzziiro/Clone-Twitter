import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Lucas Ziro</h1>
        <h2>@zzziiro</h2>

        <p>
          Developer at <a href="https://tiflux.com/">@Tiflux</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Balneário Barra do Sul
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 08 de novembro de 2005
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>319</strong>
          </span>
          <span>
            <strong>234 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
