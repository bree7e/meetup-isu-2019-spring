/**
 * Событие
 */
export interface MeetUpEvent {
    id: number;
    name: string;
    description: string;
    address: string;
    signup_description: string;
    signup_from_date: number;
    signup_to_date: number;
    from_date: number;
    to_date: number;
    published: boolean;
    categories?: MeetUpEventCategory[];
    date?: Date | string;
    eventProgram?: EventProgramItem[];
    annotation?: string;
    map_link?: string;
  }

  /**
   * Запись в расписании
   */
  export interface EventProgramItem {
    name: string;
    time: Date | string;
    speakers: MeetUpEventSpeaker[];
  }

  /**
   * Докладчик
   */
  export interface MeetUpEventSpeaker {
    name: string;
    description: string;
  }

  /**
   * Место проведения
   */
  export interface MeetUpEventPlace {
    address: string;
    map_link: string;
  }

  /**
   * Список событий
   */
  export interface MeetUpEventList {
    meetUpEvents: MeetUpEvent[];
    categories: MeetUpEventCategory[];
  }

  /**
   * Категория события
   */
  export interface MeetUpEventCategory {
    id: string;
    name: string;
  }

  /**
   * Форма регистрации
   */
  export interface MeetUpEventRegistryForm {
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
  }

  /**
   * Форма авторизации
   */
  export interface MeetUpEventAuthForm {
    email: string;
    password: string;
  }

