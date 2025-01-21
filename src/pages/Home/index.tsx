/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import {
  AccountSchema,
  AccountType,
  NosSchema,
  NosType,
} from "@/schemaValidations/demo";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useDemoQuery } from "@/queries/demo";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";

import "./style.css";
import { JoditEditor } from "./components/editor";

// const options = [
//   {
//     value: "en",
//     label: (
//       // <div>
//       // <img src={ukflag} width="20" alt="" />
//       // </div>
//     )
//   }, //en
//   {
//     value: "de",
//     label: (
//       // <div>
//       // <img src={deflag} width="20" alt="" />
//       // </div>
//     )
//   } //de
// ];

const Home = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "event 1", date: "2019-12-01" },
    {
      title: "event 2",
      start: "2019-12-01",
      end: "2019-12-05",
      allDay: true,
      HostName: "William",
    },
    {
      title: "event 3",
      start: "2019-12-05",
      end: "2019-12-07",
      allDay: true,
    },
    {
      title: "event 4",
      start: "2019-12-05",
      end: "2019-12-07",
      allDay: true,
    },
    {
      title: "event 5",
      start: "2019-12-05",
      end: "2019-12-07",
      allDay: true,
    },
    {
      title: "event 6",
      start: "2019-12-05",
      end: "2019-12-07",
      allDay: true,
    },
  ]);
  const calendarComponentRef = useRef(null);

  const handleDateClick = (arg) => {
    alert(`${arg.dateStr}`);
    console.log("asdsa", arg.dateStr);
  };

  const handleSelectedDates = (info) => {
    alert(`selected ${info.startStr} to ${info.endStr}`);
    const title = prompt("What's the name of the title");
    if (title) {
      const newEvent = {
        title,
        start: info.startStr,
        end: info.endStr,
      };
      console.log("Adding new event:", newEvent);
      setEvents((prevEvents) => [...prevEvents, newEvent]);
    } else {
      console.log("No title provided.");
    }
  };

  const [file, setFile] = useState<File | null>(null);
  const avatarInputRef = useRef<HTMLInputElement>(null);
  const [params, setParams] = useState("en");
  const [value, setValue] = useState("");

  const { data, refetch } = useDemoQuery(params);

  const form = useForm<NosType>({
    resolver: zodResolver(NosSchema),
    defaultValues: {
      message: "",
      name: "",
      email: "",
      upload: "",
    },
  });

  const reset = () => {
    form.reset();
    setFile(null);
  };

  const onSubmit = async (values: NosType) => {
    console.log("values", values);
    // if (updateMeMutation.isPending) return
    try {
      // let body = values
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        // const uploadImageResult = await uploadMediaMutation.mutateAsync(
        //   formData
        // )
        // const imageUrl = uploadImageResult.payload.data

        // body = {
        //   ...values,
        //   // upload: imageUrl
        // }
      }
      // const result = await updateMeMutation.mutateAsync(body)

      // toast({
      //   description: result.payload.message
      // })
      // refetch()
    } catch (error) {
      console.log(error);
    }
  };

  const handleclicka = () => {
    console.log("hehe");
  };

  const swiperRef = useRef<any>(null);

  return (
    <>
      <Header setParams={setParams} params={params} />

      <div className="hone-page">
        <div className="banner">
          <img
            className="h-screen object-cover"
            src="./images/Heroimage.png"
            alt=""
          />
          <div className="banner-btn ">
            <img className="mr-[1.6rem]" src="./images/Mountains.svg" alt="" />
            <img
              className="mr-[1.6rem]"
              src="./images/Fishing-icon-32px.svg"
              alt=""
            />
            <img className="mr-[1.6rem]" src="./images/Crosshair.svg" alt="" />
          </div>
        </div>

        <div className="Titre-Bloc-1 mt-[8rem]">
          <div className="container">
            <div className="title">Titre Bloc 1</div>
            <div className="text-sub">Sous-titre Bloc 1</div>
            <div className="Bloc-1-item">
              <div className="item1 pt-[3rem]">
                <img src="./images/bloc-img.png" alt="" />
                <div className="item1-title">Case Title</div>
                <div className="item1-titre">Case sous-titre</div>
                <div className="text-sub">
                  Chaque sentier vous conduit à des panoramas époustouflants,
                  chaque instant devient une aventure, chaque rencontre vous
                  promet un so uvenir marquant. Avec MITIK, le tourisme
                  d’aventure allie nature brute et confort raffiné à toutes les
                  saisons. Randonnée, canoë, observation de la faune, rencontres
                  culturelles, exploration en montagne, chaque escapade est une
                  immersion inoubliable dans les grands espaces canadiens.
                </div>
                <div className="btn-item1">
                  <span>Forfait 1</span>
                  <img src="./images/Vector.png" alt="" />
                </div>
              </div>
              <div className="item1">
                <img src="./images/bloc-img.png" alt="" />
                <div className="item1-title">Case Title</div>
                <div className="item1-titre">Case sous-titre</div>
                <div className="text-sub">
                  Chaque sentier vous conduit à des panoramas époustouflants,
                  chaque instant devient une aventure, chaque rencontre vous
                  promet un so uvenir marquant. Avec MITIK, le tourisme
                  d’aventure allie nature brute et confort raffiné à toutes les
                  saisons. Randonnée, canoë, observation de la faune, rencontres
                  culturelles, exploration en montagne, chaque escapade est une
                  immersion inoubliable dans les grands espaces canadiens.
                </div>
                <div className="btn-item1">
                  <span>Forfait 1</span>
                  <img src="./images/Vector.png" alt="" />
                </div>
              </div>
              <div className="item1 pt-[3rem]">
                <img src="./images/bloc-img.png" alt="" />
                <div className="item1-title">Case Title</div>
                <div className="item1-titre">Case sous-titre</div>
                <div className="text-sub">
                  Chaque sentier vous conduit à des panoramas époustouflants,
                  chaque instant devient une aventure, chaque rencontre vous
                  promet un so uvenir marquant. Avec MITIK, le tourisme
                  d’aventure allie nature brute et confort raffiné à toutes les
                  saisons. Randonnée, canoë, observation de la faune, rencontres
                  culturelles, exploration en montagne, chaque escapade est une
                  immersion inoubliable dans les grands espaces canadiens.
                </div>
                <div className="btn-item1">
                  <span>Forfait 1</span>
                  <img src="./images/Vector.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Titre-Bloc-2">
          <div className="title">Titre Bloc 2</div>
          <div className="btn-2">
            <div className="btn-item">
              <img
                className="mr-[1.6rem]"
                src="./images/Mountains.svg"
                alt=""
              />
              <span>Activité 1</span>
            </div>
            <div className="btn-item">
              <img
                className="mr-[1.6rem]"
                src="./images/Fishing-icon-32px.svg"
                alt=""
              />
              <span>Activité 2</span>
            </div>
            <div className="btn-item">
              <img
                className="mr-[1.6rem]"
                src="./images/Crosshair.svg"
                alt=""
              />
              <span>Activité 3</span>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.307923728216!2d106.62245207570265!3d10.710715860400995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752dfebd1077a7%3A0x3f25f485c47bf76e!2zMzAyMCDEkC4gUGjhuqFtIFRo4bq_IEhp4buDbiwgUGjGsOG7nW5nIDcsIFF14bqtbiA4LCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1737467132072!5m2!1svi!2s"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="Titre-Bloc-3">
          <div className="container">
            <div className="title">Nos activités</div>
            <div className="boxcalendar">
              <FullCalendar
                schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
                ref={calendarComponentRef}
                defaultView="dayGridMonth"
                dateClick={handleDateClick}
                displayEventTime={true}
                header={{
                  left: "prev,next today",
                  center: "title",
                  right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                }}
                selectable={true}
                plugins={[
                  dayGridPlugin,
                  interactionPlugin,
                  timeGridPlugin,
                  resourceTimeGridPlugin,
                ]}
                eventClick={(event) => {
                  console.log(event.event._def.publicId);
                }}
                events={events}
                select={handleSelectedDates}
                eventLimit={3}
              />
            </div>

            <Form {...form}>
              <form
                noValidate
                className="grid auto-rows-max items-start gap-4 md:gap-8"
                onReset={reset}
                onSubmit={form.handleSubmit(onSubmit, (e) => {
                  console.log(e);
                })}
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <div className="form-name">
                        <Label htmlFor="name">Nom:</Label>
                        <Input
                          placeholder="Entrez votre nom"
                          id="name"
                          type="text"
                          className="w-full"
                          {...field}
                        />
                        <div></div>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <div className="form-email">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Entrez votre e-mail"
                          required
                          {...field}
                        />
                        <div></div>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <div className="form-message">
                        <Label htmlFor="message">Message:</Label>
                        <JoditEditor
                          value={value}
                          onChange={(e) => setValue(e as any)}
                          {...field}
                        />
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="upload"
                  render={({ field }) => (
                    <FormItem>
                      <div className="form-upload">
                        <Label htmlFor="upload">Tên:</Label>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          ref={avatarInputRef}
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              setFile(file);
                              field.onChange(
                                "http://localhost:3000/" + field.name
                              );
                            }
                          }}
                        />
                        <button
                          className="btn-upload"
                          type="button"
                          onClick={() => avatarInputRef.current?.click()}
                        >
                          <img src="./images/upload.png" alt="" />
                          <span className="upload-text1">Pièce jointe</span>
                          <span className="upload-text2">
                            (*fichiers pdf uniquement)
                          </span>
                        </button>
                      </div>
                    </FormItem>
                  )}
                />

                <div className=" items-center gap-2 md:ml-auto flex btn-form-3">
                  <Button className="clear" variant="outline" type="reset">
                    Clear All
                  </Button>
                  <Button className="save" type="submit">
                    Lưu thông tin
                    <img src="./images/send-2.png" alt="" />
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>

        <div className="Titre-Bloc-4">
          <div className="container">
            <div className="title">
              <span>Titre</span>
              <Link to="">
                <span>En savoir plus</span>{" "}
                <img src="./images/Vector-right.svg" alt="" />
              </Link>
            </div>
            <div className="slider">
              <Swiper
                slidesPerView={4}
                slidesPerGroup={2}
                spaceBetween={0}
                grid={{
                  rows: 1,
                  fill: "row",
                }}
                modules={[Pagination]}
                grabCursor={true}
                className="spsl-slide"
                breakpoints={{
                  320: {
                    slidesPerView: 3.5,
                    spaceBetween: 30,
                  },
                  480: {
                    slidesPerView: 3.5,
                    spaceBetween: 30,
                  },
                  640: {
                    slidesPerView: 3.5,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3.5,
                    spaceBetween: 30,
                  },
                  1440: {
                    slidesPerView: 3.5,
                    spaceBetween: 30,
                  },
                  1500: {
                    slidesPerView: 3.5,
                    spaceBetween: 30,
                  },
                  1920: {
                    slidesPerView: 3.5,
                    spaceBetween: 30,
                  },
                }}
                ref={swiperRef}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
              >
                <SwiperSlide>
                  {" "}
                  <div className="item">
                    <img src="./images/image-slider.png" alt="" />
                    <div className="title-sub">Case title</div>
                    <div className="title-item">Case sous-titre</div>
                    <div className="content">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="item">
                    <img src="./images/image-slider.png" alt="" />
                    <div className="title-sub">Case title</div>
                    <div className="title-item">Case sous-titre</div>
                    <div className="content">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="item">
                    <img src="./images/image-slider.png" alt="" />
                    <div className="title-sub">Case title</div>
                    <div className="title-item">Case sous-titre</div>
                    <div className="content">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="item">
                    <img src="./images/image-slider.png" alt="" />
                    <div className="title-sub">Case title</div>
                    <div className="title-item">Case sous-titre</div>
                    <div className="content">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="item">
                    <img src="./images/image-slider.png" alt="" />
                    <div className="title-sub">Case title</div>
                    <div className="title-item">Case sous-titre</div>
                    <div className="content">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="item">
                    <img src="./images/image-slider.png" alt="" />
                    <div className="title-sub">Case title</div>
                    <div className="title-item">Case sous-titre</div>
                    <div className="content">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="item">
                    <img src="./images/image-slider.png" alt="" />
                    <div className="title-sub">Case title</div>
                    <div className="title-item">Case sous-titre</div>
                    <div className="content">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        <div className="Titre-Bloc-5">
          <div className="container ">
            <div className="left">
              <img src="./images/Mask-group.svg" alt="" />
              <div className="title">
                Des expériences inoubliables <span>Lorem Ipsum truc</span>
              </div>
              <div className="content">
                <div className="left"></div>
                <div className="right">
                  <div className="title">À propos de BASIC</div>
                  <div className="text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <img src="./images/kem.png" alt="" srcset="" />
            </div>
          </div>
          <div className="container btn-bloc">
            <div className="btn-bloc-5">
              <div className="btn1">
                <img src="./images/btn1.svg" alt="" />
                <div className="title">Authenticité</div>
                <div className="text">Sous-titre</div>
              </div>
              <div className="btn1">
                <img src="./images/btn2.svg" alt="" />
                <div className="title">Authenticité</div>
                <div className="text">Sous-titre</div>
              </div>
              <div className="btn1">
                <img src="./images/btn3.svg" alt="" />
                <div className="title">Authenticité</div>
                <div className="text">Sous-titre</div>
              </div>
              <div className="btn1">
                <img src="./images/bt4.svg" alt="" />
                <div className="title">Authenticité</div>
                <div className="text">Sous-titre</div>
              </div>
              <div className="btn1">
                <img src="./images/btn5.svg" alt="" />
                <div className="title">Authenticité</div>
                <div className="text">Sous-titre</div>
              </div>
            </div>
          </div>
        </div>

        <div className="Titre-Bloc-6">
          <div className="container">
            <div className="title">
              <div className="left">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially
              </div>
              <div className="right">
                Immortalisez des moments inoubliables avec <span>#BASIC</span>
              </div>
            </div>
            <div className="content-img">
              <img src="./images/5-1.png" alt="" />
              <div className="item">
                <img src="./images/5-2.png" alt="" />
                <div className="content">
                  <div className="left">
                    <div className="title">La famille</div>
                    <div className="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </div>
                  </div>
                  <div className="right">24 Sep 2024</div>
                </div>
              </div>
            </div>
            <div className="sub-item">
              <div className="item-sub">
                <img src="./images/5-3.png" alt="" />
                <div className="item-antony">
                  <img src="./images/ins.svg" alt="" />
                  <span>Anthony Durand </span>
                  <img className="arrow" src="./images/arrow.svg" alt="" />
                </div>
              </div>
              <div className="item-sub">
                <img src="./images/5-3.png" alt="" />
                <div className="item-antony">
                  <img src="./images/ins.svg" alt="" />
                  <span>Anthony Durand </span>
                  <img className="arrow" src="./images/arrow.svg" alt="" />
                </div>
              </div>
              <div className="item-sub">
                <img src="./images/5-3.png" alt="" />
                <div className="item-antony">
                  <img src="./images/ins.svg" alt="" />
                  <span>Anthony Durand </span>
                  <img className="arrow" src="./images/arrow.svg" alt="" />
                </div>
              </div>
              <div className="item-sub">
                <img src="./images/5-3.png" alt="" />
                <div className="item-antony">
                  <img src="./images/ins.svg" alt="" />
                  <span>Anthony Durand </span>
                  <img className="arrow" src="./images/arrow.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="text-con">
              Consultez @BASIC et <span>#BASIC</span> pour découvrir les ex
              périences inoubliables des pourvoiries et activités BASIC.
            </div>
          </div>
        </div>

        <div className="Titre-Bloc-7">
          <img
            src="./images/laurice-manaligod-OYaTU0j1N4I-unsplash.png"
            alt=""
          />
          <div className="container content-exp">
            <div className="content-7">
              <div className="title">
                Explorez avec BASIC <span>Dès aujourd’hui</span>
              </div>
              <div className="sub">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
