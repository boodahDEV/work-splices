import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Navigacion',
    main: [
      {
        state: 'user/:id/:id/dashboard',
        name: 'Mi centro de control',
        type: 'link',
        icon: 'ti-harddrives'
      },
      {
        state: 'dashboard/:id',
        name: 'Explorar',
        type: 'link',
        icon: 'ti-home'
      },
      {
        state: "project/:id/:id/dashboard",
        name: 'Proyectos',
        type: 'link',
        icon: 'ti-briefcase'
      },
      {
        state: 'project/:id/:id/ideas',
        name: 'Ideas',
        type: 'link',
        icon: 'ti-light-bulb'
      },
      {
        state: 'user/:id/:id/teams',
        name: 'Equipos',
        type: 'link',
        icon: 'ti-flag-alt-2'
      },
      {
        state: 'user/:id/:id/peoples',
         name: 'Personas',
        type: 'link',
        icon: 'ti-user'
      }
    ],
  }
  // {
  //   label: 'Gestion de proyectos',
  //   main: [
  //     {
  //       state: 'bootstrap-table',
  //       short_label: 'B',
  //       name: 'Manejos de gastos',
  //       type: 'link',
  //       icon: 'ti-receipt'
  //     },
  //     {
  //       state: 'bootstrap-table',
  //       short_label: 'B',
  //       name: 'Gestion de fondos',
  //       type: 'link',
  //       icon: 'ti-receipt'
  //     },
  //     {
  //       state: 'bootstrap-table',
  //       short_label: 'B',
  //       name: 'Administrar proyecto',
  //       type: 'link',
  //       icon: 'ti-receipt'
  //     },
  //     {
  //       state: 'bootstrap-table',
  //       short_label: 'B',
  //       name: 'Solicitudes de union',
  //       type: 'link',
  //       icon: 'ti-receipt'
  //     },
  //     {
  //       state: 'bootstrap-table',
  //       short_label: 'B',
  //       name: 'Estadisticas',
  //       type: 'link',
  //       icon: 'ti-receipt'
  //     }
  //   ]
  // },
  // {
  //   label: 'Otros',
  //   main: [
  //     {
  //       state: 'bootstrap-table',
  //       short_label: 'B',
  //       name: 'Configuracion',
  //       type: 'link',
  //       icon: 'ti-receipt'
  //     }
      
  //   ]
  // }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
