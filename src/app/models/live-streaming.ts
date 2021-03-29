import {LinkResponse} from './link-response';

export class LiveStreaming {
  id: number;
  header: string;
  beginDate: string;
  league: string;
  homeId: number;
  awayId: number;
  linkDTOS: LinkResponse [];
}
