export const author = {
  short_bio: {
    value:
      '<p>Originally from <a href="https://en.wikipedia.org/wiki/Lexington,_Massachusetts" data-new-window="true" target="_blank" rel="noopener noreferrer">Lexington</a> and now residing in <a href="https://www.gotobrno.cz/en/" data-new-window="true" target="_blank" rel="noopener noreferrer">Brno</a>, Aaron is an educator, editor, and elucidator.</p>'
  },
  picture: {
    value: [
      {
        url:
          "https://assets-us-01.kc-usercontent.com:443/3fcf700a-30e8-4d1d-9e64-43193a89fe7a/f7377b84-8ff0-4b77-bc0f-cfdc34d379cc/quixote.jpg"
      }
    ]
  },
  name: {
    value: "Aaron Collier"
  },
  url: {
    value: "aaron-collier"
  }
};

export const simpleImage = {
  description: "A cool picture",
  url: "https://example.com/"
};

export const sampleQuote = {
  system: {
    type: "quote"
  },
  elements: {
    quote: {
      resolvedData: {
        html:
          "<p>You never really understand a person until you consider things from [their] point of view — until you climb into [their] skin and walk around in it.</p>"
      }
    },
    source: {
      resolvedData: {
        html:
          "<p>Atticus Finch in <em>To Kill a Mockingbird </em>by Harper Lee</p>"
      }
    }
  }
};

export const sampleShowcase = {
  system: {
    type: "showcase"
  },
  elements: {
    items: {
      linked_items: [
        {
          id: "457d3938-5907-5cca-947d-bae1583e105d",
          elements: {
            link: {
              value: "https://www.youtube.com/watch?v=vj7TyUgBEW8"
            },
            name: {
              value: "Write the Docs talk"
            },
            short_description: {
              links: [
                {
                  linkId: "3cc9d486-53e2-495d-9e2b-25665e0ff29f",
                  urlSlug: "seeing-your-docs-through-different-eyes",
                  type: "article",
                  codename: "write_the_docs_2019"
                }
              ],
              resolvedData: {
                html:
                  '<p>A video of a talk I gave at the <a href="http://www.writethedocs.org/conf/prague/2019/">Write the Docs Prague 2019</a> conference. Or read a <a data-item-id="3cc9d486-53e2-495d-9e2b-25665e0ff29f" href="">text version of the talk</a>.</p>'
              }
            },
            teaser: {
              value: [
                {
                  url:
                    "https://assets-us-01.kc-usercontent.com:443/3fcf700a-30e8-4d1d-9e64-43193a89fe7a/51e9be55-8502-40ca-b374-a1305b36dc56/Slide16.PNG"
                }
              ]
            }
          },
          fields: {
            slug: "write-the-docs-talk"
          }
        },
        {
          id: "fce4fe5b-59c9-5c88-8634-16b63df49d4a",
          elements: {
            link: {
              value: "https://www.youtube.com/watch?v=MlMkAqxoPZM"
            },
            name: {
              value: "Structured content video"
            },
            short_description: {
              links: [],
              resolvedData: {
                html:
                  "<p>A video about what structured content is and how it can benefit content creators.</p>"
              }
            },
            teaser: {
              value: [
                {
                  url:
                    "https://assets-us-01.kc-usercontent.com:443/3fcf700a-30e8-4d1d-9e64-43193a89fe7a/b0481084-18a8-4cf0-ae01-d1a0dbd766ce/structured_content.jpg"
                }
              ]
            }
          },
          fields: {
            slug: "structured-content-video"
          }
        }
      ]
    }
  }
};
