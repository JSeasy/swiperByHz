import { reactive } from "vue";

interface IItem {
  src: string;
}

export const imgList = reactive<IItem[]>([
  {
    src: "https://image.s2bdiy.com/open/AWSnE2Arrj.png?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200/auto-orient,0/quality,Q_100",
  },
  {
    src: "https://image.s2bdiy.com/open/AWSnE2Arrj.png?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200/auto-orient,0/quality,Q_100",
  },
  {
    src: "https://image.s2bdiy.com/open/AWSnE2Arrj.png?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200/auto-orient,0/quality,Q_100",
  },
  {
    src: "https://image.s2bdiy.com/open/mfJ3eNKhX3.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200/auto-orient,0/quality,Q_100",
  },
  {
    src: "https://image.s2bdiy.com/open/hTcXbs4MQG.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200/auto-orient,0/quality,Q_100",
  },
]);
