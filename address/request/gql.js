import { gql } from 'apollo-boost';

export const GET_HOUSE_BY_STREET = gql`
  query Query($variable: UUID!) {
    aosByStreet(L1match: "", L2match: "", L3match: "", ofStreet: $variable, locale: "UA") {
      id
      name {
        ofFirstLevel {
          fullName
        }
        ofSecondLevel {
          fullName
        }
        ofThirdLevel {
          fullName
        }
      }
      ofDistrict {
        id
        name {
          fullName
        }
      }
      ofStreet {
        id
        name {
          fullName
        }
      }
    }
  }
`;

export const ALL_STREETS = gql`
  {
    query: streetsByLocality(
      match: ""
      ofLocality: "538d7492-371b-11e7-b112-000c29ff5864"
      locale: "UA"
    ) {
      id
      name {
        fullName
        shortName
      }
      ofDistrict {
        id
        name {
          fullName
          shortName
        }
      }
    }
  }
`;

export const GET_ALL_DISTRICTS = gql`
  {
    query: districtsByLocality(
      match: ""
      ofLocality: "538d7492-371b-11e7-b112-000c29ff5864"
      locale: "UA"
    ) {
      id
      name {
        fullName
        shortName
        fullToponym
        shortToponym
        isToponymBeforeName
      }
      ofLocality {
        id
        name {
          fullName
          shortName
          fullToponym
          shortToponym
          isToponymBeforeName
        }
      }
    }
  }
`;

export const GET_ALL_COUNTRIES = gql`
  {
    query: countries(match: "", locale: "UA") {
      id
      name {
        fullName
        fullToponym
      }
    }
  }
`;

export const GET_ALL_REGIONS = gql`
  {
    query: regionsByCountry(
      match: ""
      ofCountry: "1437c9b6-370f-11e7-8ed7-000c29ff5864"
      locale: "UA"
    ) {
      id
      name {
        fullName
        fullToponym
      }
    }
  }
`;

export const SELECT_SUBREGION = gql`
  query Query($variable: UUID!) {
    subregionsByRegion(match: "", ofRegion: $variable, locale: "UA") {
      id
      name {
        fullName
        fullToponym
      }
    }
  }
`;

export const SELECT_SETTLEMENTS = gql`
  query Query($variable: UUID!) {
    localitiesByRegion(match: "", ofRegion: $variable, locale: "UA") {
      id
      name {
        fullName
        fullToponym
      }
    }
  }
`;

export const SELECT_DISTRICTS_BY_SETTLEMENT = gql`
  query Query($variable: UUID!) {
    districtsByLocality(match: "", ofLocality: $variable, locale: "UA") {
      id
      name {
        fullName
        fullToponym
      }
    }
  }
`;

export const SELECT_STREETS_SETTLEMENT = gql`
  query Query($variable: UUID!) {
    streetsByLocality(match: "", ofLocality: $variable, locale: "UA") {
      id
      name {
        fullName
        fullToponym
      }
    }
  }
`;

export const SELECT_STREETS_BY_DISTRICT = gql`
  query Query($variable: UUID!) {
    streetsByDistrict(match: "", ofDistrict: $variable, locale: "UA") {
      id
      name {
        fullName
        fullToponym
      }
    }
  }
`;

export const GET_APARTMENT_BY_BUILD = gql`
  query Query($variable: UUID!) {
    premisesByAO(match: "", ofAO: $variable, locale: "UA") {
      id
      name {
        fullName
        fullToponym
      }
    }
  }
`;
