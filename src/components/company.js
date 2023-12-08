import cx from "classnames";
//this is the table component that contains company data
const CompanyTable = () => {
  const companies = [
    {
      "ID": 1234,
      "name": "ABC Corporation",
      "product": "Personal Loan",
      "amount": 100000,
      "date": "2023-12-10",
      "purpose": "Funding",
      "status": "Approved",
      "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOGSURBVHgBxVVLbBtFGP52drzr9Su2m9g0aZw4SRu1kKYRFgpFFVJSUQQSKAJxTS5R1RtcuICQuHHjBJyQAInHAak81EYVSIAiAZFCStNX1MSwcUpSpUnKOrVj72O2u6tm69jr1K1U9ZNG88+/3/zfP/PP7ACPGFwjpK+mf2mWpOCQPyB0lUtamFJa4ExutrRV+vu1/sHrDyvA/TA/fYon9G3L7tiFJ8M033+5Z+CzhgW+nZ3sEkXpa0LpM2gc8yoxXxhJD8i7Cnw/98dh6pN+ssxEpX85ewM35FVs3rrtjMOxEFIH96G5NV5Jk28W14+P9Q1nPQUm/j3fqWnsd57n9277Njc28d3HE8ivb8IL3f2dODE6BI5zQ62pRX1wpC/jiJBKMmPcmergZz/9uW5wG9kLMi5OXql0NROf+c128q7AmYXzY1Z3qJI5NTGDteUN3A+LV5d2jKnPlzl9dXp0h4C1xveqJ2ZnZdcO+Snqobyl1vgEHz/mCvw4P/Os1aWrSZTyrv3WK70Y7ksiKNYKxVqaanxWws9/cu5cwmEznR0lAqnhJDtagKUcWttaMLi/2Wk2VpUSlIIGu65T1ir5FwfghbaelmFHgFA+7EUYPZHCkev/Q+x9aoc/0eR3mo2egopf/QxFj/mcQbqdtDVVE70ElLZuyPsOwOTqX/hLXU+jGIx6ftN0NeQICIJP9SLoVEC2YwDzUtwzwIIUQy7Rg3qgPC07AgYz8tgFC4EYLktWlgXFUtWA2xuYCSdxLbhnt2lQ9fJlpwYCpVOsXhYcwRNiGDFfAJj80vUnDr8KohaxrhZQZrrnXI2xv5xzqK6s/3fk+LFTVlmClYSkP4RDkSTiQgCCGATJ3wSvrEDtPQbS3oeYIGGPGIBhMhSMnbusa/rM608OfuBW7/SVP98URP+H2+NOa1vapCY0ipVSHv8U7t16jnBjL6X7P3cP/2rxwkcmMy7adrsV+EGC29jrj6BVitwdmbIV/AvbcgVOZk5qpa38GyLhb7UHongYtFsHgZhQtgrasK3irKSatLi4+FwwFDxrHbEIHhCMsRVFUYbS6fTcts/zBuVyue5IJGI/Op1o8N02TXPBaiPxePxSpZ94kVOpVHZ8fHy/DvaOYRj2v9i822pgPTRrOmPvRqPR/urgdVdQjWuyfFDy+Y5SQg6IomgXSClppezy0vJvmUxmDo8TdwCm5Sy6v0EX5QAAAABJRU5ErkJggg=="

    },
    {
      "ID": 5678,
      "name": "XYZ Industries",
      "product": "Personal Loan",
      "amount": 75000,
      "date": "2023-11-25",
      "purpose": "Purchasing Office Equipment",
      "status": "Processing",
      "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAO+SURBVHgBrVVdbBRVFP7undmd2W13u9t2u/1Rsdqt1oUtCAESQgKR6HaRRGJIfPTB+KCJIT76gk/qm5rwaCLERA1BRUnBEGKtkRgbcKHSWmkpBVpK2W5/gLa7szN3ODOwwHZ3dvn7ksm9c+4537nn3nvOYaiAjw8ccL8ci3RKHFEw1mgwQxLMdUURGOqKxP6qZM+cFr7993jYr9Z9wDh7j34DpXSEEFclif+SZeanO1vXjD2Qg58uJAMK+B5TmLvxEDDBvuBiaU8isvG6o4NDF/9pdunsKIljeAQIYQ5o4PE3I53jeRnPT348caLBrfPeRyW3yTiLqsz8bf/fx+uKHLjD3u9NoA2PC4ZIKFR/sMBB90jybcbYVjwhmCa2WJzWXLYFjH3EKhhdOT+Ja5enaYMMrbEV8Nf6yurrpvk+DfvYD2f74qrHfdRJ0SI99k0P5lMFjwPrXl2NDV1ryzqhS9/KifwNJ4UbMzdwaG93EbmFk8dOY2zgEsrBFMYuTtnZ6aQw1DeMekXGO+taEapSitbP/DGIsg6AzbKhGyspG0sqpCbS9pl3tTfZX1YXyOgGekavYSFn4PDIVFkHsiyHuSQxj5OCTiQGPYk8FJmjRnVhW1sY6cUsctkchCHKuDDrOANPOy17fR7MLmnIkKP7ceS/SfReSKEm5Ad3iN6CIcwlntNzjnG2tDVBox1+13/vMsVCDnJGR+OzDdjx7msoB875gEwh/knZsKqUQseGdnscHpnEwUWBnambYNVubHwlikDHClQCHe5pdng4uYVqSI+TksJlBFwqLg1eRFeagmUMQ3OLUHdsg8YEbuoa5nMZIjOLbHNaNm4n8M//nzopy9La5cRRfxgeyXU7iukp/N7dC4leUvOqCOLrC5NsOruAscVZZIWeF53b/vzqF+xSIUt8Lw1f51ck2uXKmkaoXL7HoEp46fX19vRpT3H/qVeqSMWF/uuTVIuoO3D2iSW3n8D2tjX7mIm7x/SMJ1hIjsLG0UBkpVAtu9Gi+q1i15No7dx/14GFVHp6lxWWpdTs8Zcwvp3JYaXa3qkTKLrz2sLUW6U2hiPn+p+K+IK/hjy+6HJDwxTom72MDl/YvvRSoB59VlXVuNfrncjLCrIk0R4br1OqNtEZfg4UPguJcbiZVPK1WCCbL6mnbL6fvMiBhdra2vlgMPghGTxH31ckunrHGbUNKh+ioDTMaZr22ejoaAvZ7KZvbjlfpT5jY2ZmZhNl5Yun5sabWtSAGVaqJjKZzGAymTyTSCSy5WxvATzzVL4w92cqAAAAAElFTkSuQmCC"

    },
    {
      "ID": 9876,
      "name": "Tech Innovators",
      "product": "Personal Loan",
      "amount": 120000,
      "date": "2023-12-05",
      "purpose": "Funding for New Business",
      "status": "Cancelled",
      "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAP2SURBVHgBpVZbTBxVGP7O2dldypYWVoGC3bbclHIJoL2IxlpaYwuVisb6aNUHbaIm9dXEy4MmJj5oSR9q4iUkPvjQhAQoFy/FVKsJanebtJTLUmih4AIFyi7Lzu7MOf47FHDZ3aGxXzJzZv77f87//zMM66CxsdHuOlBdYbMpJZLjIQnGmWTjOhN9zxdWXVxPnyVjfP3bD7mZmc53LIpygl7TE8kIXfcpitIaYuKTF/KqRu7JQfOwO90O/qEU8iTWgbqowr7BbjxTZl8EEfno5YJdd5I6aB+7vFWERAdjrMzMsBACXs8ILpz9HRVPl2L3oaq7dP2azvRDDYV7RuMcdE715oj5yK8SsiBRpP09XkyNTWN+NoCZiVmEgqrBK3uyGI/sKsKWHVnL4oNqWK1+cefe2zEOzg15ztNSs9a4f8aP7z9rRjgUQTIoNgVvfPoKKPOlqBl+qcuvNGxxw7jX/Woi41FMj8+aGo9i97OVK8ajkBL724cvHzecGxTO3qdTikPQH8TI1Zsr7xmpdrgy0mBTLEhLsSJ9swPs8SLk5GXH6Wph7W1amljbwF9HmEVpQwL82XkJPV1u43mjnbZhXzkOFrtWI6WrIz8TySCErFEYtzYgUfgEZ67TWA8Ub8Wb+8qwoGoxfJ0nbaMlvq4f42CiMplAXuk2ZGSno4+qRtMEsjelxvBVCzd1oFj4E+SAlycT4GSg9vVnMBPREBHxWUqYg3Oey+nIbWZCGVmb8dp7x+BMUeJ4QavFTBWS4YFojrexXiQOO7QbI0AgsKpMlzfdYa4ooSq6EJMWzh80k9P9i7C6tgFDQ9R5ftx4tBz9RS5o3PwMyMMVRUpxgWIsiTMa0TEx4sPY4ASctBW3tmfDVUJi4TCmqZPam7qRmrERW7ZnorAyP+FcpubzsNZB937OWfcy0T8TwN8/eWiYDdMMChs0hyMFR+v3II+qaLB3FONCh3foH/h8cwY/zZmGhrdqsYnW/8IiWa3ht3XgkocqpsJPg6z59DnDyVo46BxSaTRPTc8jEazUiEdPHKaht9TVdEbe5woqi+5uojwVvfd0uhMaj2JhQU1qPIoINWEXbds8DccoaFc+Ntborf7hx76dGJ7s7usZwP0gMLeAti+7aJSHuuvyKpqitNVCnrN3CmajsQEn7gOhxfBQz89/1F/vdxuprNRZS8tXPm7bcJA+6f8/DYYr1hSl5seWb8aXSTGtONB78U5pcfV3uhQpJL0XJj8Fa0Hf8FOLFuV419nPJ2N9JsHhhpM7LNA/kOB1NHezksjP0ag5E5La6fNtZ24hYVL3gCMvvfuUlcmdWkTkUPPIiCZuCq5eu3511OP1dqhmuv8CNUqCg1B0yd8AAAAASUVORK5CYII="

    },
    {
      "ID": 2345,
      "name": "Global Solutions Ltd.",
      "product": "Personal Loan",
      "amount": 90000,
      "date": "2023-11-15",
      "purpose": "Purchasing Research Materials",
      "status": "Approved",
      "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPBSURBVHgBnVZtTFtVGH7O/ejtbQtrM6ULdApEIhbodMMlzkzdEpVkzsjijIkxmTHZD6ao8admkmhi3D9i/Phj2B8T3bJIEGf/sGFMzSIyNg1usiIwkJUCo4PS3rb3nuNpSQuk95aP588993nf93nPee9531yCDbDv5En5/bYTjWUuZxMBrchyyWRiSmL0Vmvg4OBG8cTKcO73y7tsZa63ZZvUxt3cZj6Msimq0/OiQjqP1O6d2FSCH8aG3AqEj3jwu9gCqGGcGQuGTre3t6csE1ycuu6jGg0SQhqwDRjUCC0lE0dfCxxcyHNCftE9cbWSaeyXzYqntDT6z4egJbQCJwrik+WqI9jzR48jz0mFRYZ8y89TayYWm72HYFcf7s0vwe60Q5JFxBeWoWd07D3cBLvDXvAVBHE/3eH7ji9fzL7nSvRTeOgECOmCBS50/ojIeLSIzyYSRAF2l4rXPzi+zpZO6a2t/ubulRIRctpK/NbVf3MnMIOeMZDWMvw6sSKbTZHac9K9I0NHiEh6zQRGr48hePZSEV+uynjGX4kDdV4Eb86gsqUZHm/xTZYF9pjECDtGrNqBrPKiQPDx8Wbscjvg3aGuujTW4LbTZRoeX061SIIgBGABX10lylwK2g7XY2B0Fnse3Fnko1BqFQ7Fbn9U4tULWLWzotrw/NHH8dRuFxp8HmwVjLEGfnDIpZzcjdV4s+s3hCNL2DL4BeO3iM2X8lEcCh45FMD0RNTUHpdK7I8hJhgGjWAD+J94GP6GB4Cx9a5JUUREVa31Kb0jGLrxKzYBZ012UvOCDoah31nAiKscofsqwErEUGr0CZIsnysl7IglUHVjGu75OFDjBfhJKN+5Eb4LR3TRtMnyiEUXf85doJ5/BgdESWxea7x/fA7Vf96GurQyzIRyG9SmChBFRGZmGanhuRyv2yTM1FZg0l+FtLr6PTKZ9Pcv1e9/NTfsRCJ8wR+5WSTz1q8PjcATWT8e6GIaiSv/8QQSmKYXeCmto+rmNHZOzmP46Xose5wrG5Lk7MBbbeGL4WuXGMGhpr6/uXgM20GK98215xqhOeQvX6jbdyqXKG+MRyMvVw+M3tiueBZKMo2H+oZ7ufhbea6Q4JUDLXe94eizBvAXtomUoXdfXpzMzu3Cly+aErNnvilTUukOwth7KPFTsBY6Yxpl9LPP+y980tHfr6+1WQosdHxVTQl9RyI4JoDsNvPPMGNcJsJZnTo6PR1vmNZ2Uzuc+fTrPTY9UxPXDJ8kMl5FMkdt8pWqD09NbhT7P7haXH5hyi9RAAAAAElFTkSuQmCC"

    },
    {
      "ID": 6789,
      "name": "InnovateTech",
      "product": "Personal Loan",
      "amount": 80000,
      "date": "2023-11-30",
      "purpose": "Funding for Expansion",
      "status": "Processing",
      "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOSSURBVHgBxVZtbBRFGH52drbbj2tLe1joCd7dcmfFImo0xFYIUUhFSMVE/hJTPyoJGDX+UX/pT38YY0AxVYzGROMfo5XQj5BojB9RQ0KiiFIol1Ion9crvd7u3e7OMLstd9feXHOQEJ5kdmbnfed5ZuZ9Z3aBWwylEqcNG3ruCDTWdIEQgzlOgFCaBrOPM9s5OjR04OTNCihbn9rzEhTlDXCEF/FLuMx5d+jg/j7RZhUJdHXviarAl4qiPIrKkeB2dvPAQN+pRQWe3P7yvWLGh4WhFTcMfiZj5bp+Gu77Tyqw5elXI4pr/6woZCVuHtNm1ur4ceiTY96LWmyJxR46RAhpl41qjS5D/EEDK9vuRE2gBlOXpsC5VEDXKN20tDl8YHz8X4de793avXsnFNKx0FvEARt3dKC9c/X8aSbTOPjpMJITkzKRtqaWludE/SEpEJG3ZJ4bd3SWkHuobw5g+64tMO6TJxh3sdPn9R7btu1aw1Xt74VOyyMteOaVbpQDFVvkCIbvPzqE8ZGJEnvaMg1/BS4nD8sI7lkXL0teL8g73dkQRtrvkvrUafpjfgwIJRGZw4p4KN8OMwVNorii3SBKI59NwCohFAwFpQIM3KAoA62KonFpA+oEwVqX+Ec0yEvPpbeG5mWNUg6ikgApJxAMNft1gyBtEmUJl98qXqbWNtSK1K2WGPnMbAwcd3yhbfXc/k8QjgHNRVLhUvLsnK4smxzX+ccXUJh5uNjg5b6xNjKPKCURmBR913tXPRAtsVPO//QFBgc/TzDGfi0WoFVlwzM7O0F9ghREQ8ZyaHphDGPuEe/iI4UO551Cm+H4HyNgLkMmOYPU2BVYqZn84LMZC1+fOY/Rs5d9u+evUlUkhlaYAaF7vSp/F50aOTIaa1v3iAIl5r1XaxRq1sX0hRTMqQym0iaiS+qhC6Kx5DT+H7sIM5VB+tJVv4weG/PLHE4M9O99wd+m4mUL/ecd4Je728NRIxYCc9y8LWXm8MXRETTV6Lhq5TBvuywb1UQFFeI52zkH1Xkiv5Bix/7+fefCq4KbjbYVp1EGk2ZWnPzSgOu6hkg8lBDnZf3gdx8npAIe9r//9ugMNx+3LOtbABwVgrnOb63h4KbhH/bNm9yiH/0PPvvqWRHA1ymla8r553L2Xznbeu/N3S9+I+Oo6K+it7e3NnZ/53ooblyr1uts25lmOTehB8jvr/X0pHA7cQ0wt0rK/DREIQAAAABJRU5ErkJggg=="

    },
    {
      "ID": 5432,
      "name": "Smart Solutions Inc.",
      "product": "Personal Loan",
      "amount": 50000,
      "date": "2023-12-12",
      "purpose": "Purchasing Software Licenses",
      "status": "Approved",
      "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAO+SURBVHgBrVVdbBRVFP7undmd2W13u9t2u/1Rsdqt1oUtCAESQgKR6HaRRGJIfPTB+KCJIT76gk/qm5rwaCLERA1BRUnBEGKtkRgbcKHSWmkpBVpK2W5/gLa7szN3ODOwwHZ3dvn7ksm9c+4537nn3nvOYaiAjw8ccL8ci3RKHFEw1mgwQxLMdUURGOqKxP6qZM+cFr7993jYr9Z9wDh7j34DpXSEEFclif+SZeanO1vXjD2Qg58uJAMK+B5TmLvxEDDBvuBiaU8isvG6o4NDF/9pdunsKIljeAQIYQ5o4PE3I53jeRnPT348caLBrfPeRyW3yTiLqsz8bf/fx+uKHLjD3u9NoA2PC4ZIKFR/sMBB90jybcbYVjwhmCa2WJzWXLYFjH3EKhhdOT+Ja5enaYMMrbEV8Nf6yurrpvk+DfvYD2f74qrHfdRJ0SI99k0P5lMFjwPrXl2NDV1ryzqhS9/KifwNJ4UbMzdwaG93EbmFk8dOY2zgEsrBFMYuTtnZ6aQw1DeMekXGO+taEapSitbP/DGIsg6AzbKhGyspG0sqpCbS9pl3tTfZX1YXyOgGekavYSFn4PDIVFkHsiyHuSQxj5OCTiQGPYk8FJmjRnVhW1sY6cUsctkchCHKuDDrOANPOy17fR7MLmnIkKP7ceS/SfReSKEm5Ad3iN6CIcwlntNzjnG2tDVBox1+13/vMsVCDnJGR+OzDdjx7msoB875gEwh/knZsKqUQseGdnscHpnEwUWBnambYNVubHwlikDHClQCHe5pdng4uYVqSI+TksJlBFwqLg1eRFeagmUMQ3OLUHdsg8YEbuoa5nMZIjOLbHNaNm4n8M//nzopy9La5cRRfxgeyXU7iukp/N7dC4leUvOqCOLrC5NsOruAscVZZIWeF53b/vzqF+xSIUt8Lw1f51ck2uXKmkaoXL7HoEp46fX19vRpT3H/qVeqSMWF/uuTVIuoO3D2iSW3n8D2tjX7mIm7x/SMJ1hIjsLG0UBkpVAtu9Gi+q1i15No7dx/14GFVHp6lxWWpdTs8Zcwvp3JYaXa3qkTKLrz2sLUW6U2hiPn+p+K+IK/hjy+6HJDwxTom72MDl/YvvRSoB59VlXVuNfrncjLCrIk0R4br1OqNtEZfg4UPguJcbiZVPK1WCCbL6mnbL6fvMiBhdra2vlgMPghGTxH31ckunrHGbUNKh+ioDTMaZr22ejoaAvZ7KZvbjlfpT5jY2ZmZhNl5Yun5sabWtSAGVaqJjKZzGAymTyTSCSy5WxvATzzVL4w92cqAAAAAElFTkSuQmCC"
    },
    {
      "ID": 8765,
      "name": "Green Energy Innovators",
      "product": "Personal Loan",
      "amount": 150000,
      "date": "2023-11-20",
      "purpose": "Funding for Sustainable Projects",
      "status": "Cancelled",
      "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQTSURBVHgBxVVbbFRFGP5mznRv3e2FlrIttHWFtKZA+0CIikYlJlBrizWGxAdNtBpDpGoTH7DB1D7wgsaCEaMSzXp78cGHQgOlKGm8NBLQJiBVpEUpbG/WdrfdZS/nnBnmnO1lt91dGl74kzlzZub//m/+2zkEt5V2uqN+dLOiZNVQLooFJUSLqSMg4nLPiaNnb4cm6Q4ea2zJc3D+BiHiNSFQkEpHcHGDC/6tjdk+6OzsuL5SArKj/tU2hSr75WEWViocB050fdhm8GYiILUNe7+khD6POxDB+Xfh4KVne3t7tfk9mqhQ19D8/p0aN29H6TM21yZv4p6yYHzX6+9If1qXgkosHC+UqNhZqGOTS5g+j0RIehJCqjdUbLUM/n3ujLk2HrWNLfdQrg3KpbIUcNATwmqLMG5nXFH6TDAQUuC9oWBSTUukzYaCNT/94B0wQ0R0dU8q40/lh7GaqoCuQ5hDM+cqu4r3KmJ4eZ2GXbZJ1LJxsOTcspxsZ5PxEicA2Z3qGtvsIdhLK0CyrBCazJskgKbNEWl4yBVD47osPE19qGNjSVhBYOaS7mzYu1EG7t5UBH1BG5grDwUP1iFLzvNeGB4tehUfaxBJBgsUbd/eVMlkXDxII8dnnHiE5uA+pwsFjzYiNjWO6NgwIqP/QA+H5L0oeDBgevYvsS/D27MdW5jG1VKmWFMScDmizCb9pGb7WArc5rAVlyPskyRWB7461SfPSvE93MvwmhYtYIQoKjKIohjVQ+bqLV41Su4q5BS68efIFHq4O8MHR2abCwSUDATBqGaW5oJITyYjHBcHr+ObvgFkEqqwa1Re8ZdMSv3D4/EQGSQkTtR9/jI6us9jYuZmJigI1y/R08eOjHCuX0in1NU/BO+PFxAKRYGQrJSJaehRDSuQv06ePDrE5rg65aN6qYYlrxjW3LX4r7AUiMlUycoxAl77xMM4K3sgNBtAxO9DdGpYkgaTsILrx4zZJBB2y2FE1WYJzjfWrrItyPE8AMqsZn+uKstGdokM1ZWrZqhY2XoIZwiObMDh3mxYwOy1cwhc/dk0Lv8REzK7HxvvZn6HBn4Nb6i8f0ZG+ElH8UbkVz4uwy255Z/GTGpARVV1MfLcuQis9eDr33RM+BOKzyhh6ak6OwYt7IfO1dZTxz/tMWOT6FZdffOhNVufa2GuogVgojCFyNoWSClyO+jrx/TgmY7uro/enN9eVsEvvXulnVKlzTwT81iRZCgdga5FD3r3V72VuJ2yRV488McrlFneJlQpTWlQJE1GKP2EktbP9q3/ZKlq2h5sav+9RAfbw6wO+VUk5Yv6i4wyRf9TIY5oKjv8RbvHn8pOhiZflN37TufmOMtrItFAkc3itNycHvU5YLv4+aFtU7jbcgt3pZA3DCS0YgAAAABJRU5ErkJggg=="

    },
    {
      "ID": 3456,
      "name": "BioTech Solutions",
      "product": "Personal Loan",
      "amount": 110000,
      "date": "2023-12-08",
      "purpose": "Purchasing Lab Equipment",
      "status": "Approved",
      "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPjSURBVHgBnVZvbBNlGP+1d+1uE7te1wFbq8y6ZUZR0hlxGlCWiHOoH5BgNNGgH4zEBGOiCYmJYox+1okEoomGxBBHFvxgspGoaMAsbh82kI1ug26jG9C1679j163t9Y7njrTcenfjz6+5e9++z/P+fu/z3HvPezbcBn19fVXBYHATx3GPKoris9lsdoZhrpBp3OVyDdxuvs3KMDw83Oj3+/c5nc699Ndt4TZvt9t/LxaLX/M8P3NHAqlUyk2TDtBqP8JdgPy/pesLj8eTsRRIJBJ+Iu+nNGw0IUChIMHpdFiKUCQhal6sq6ubMwiIotggSdIZInpYP+nqtTiO9/6J0bEpZLPL4DgnNj/1GHbt7EC9l4fJQi7FYrFnWltbF1YIpNPpU9R06J0Hh8bw3aEebfWVqK1dg/0fv42mpkaY4B+3261x2dUb5f2dSnIVx349aUquIpNZxKefH8Z/g+fNzNsEQdhTFqCcf1bpEQrNIL6QhhXW1vNgWQZ//DVkas/n8x9qAslk8mVqA5UOF8MRS/LAQ358eeB9bHiwAaHxGczOzRt8WJZto8xsY2n1O81IJiaNAj7fWjy/NYjO7e1wOFg8GXwE4ak5jF2YwgP+dQZ/2lW7VYFNZgJT01ewo+tZ+Im0muMQCDQads1Lne1IpQVNxAzEvYWl9olKw+TFCGqqObz1ZhdWA8dV4d09r+KT/d2mdiopDepDNrw5al6vRRdw5McTEATRUiAeT6P7+x5E55P0UAtmLl5VIFE5eiE0rbWnz4zgl2P9sNip6P3tFL0ro5BlGYlkxmCnLb7EkjFG5cGrN+h3xb8D5zAfS2HfB7vh9brLKz/8Qy/GJy6X/SKRKBrWr6AB8Y7aSeB0pbIoLpX7nvU83AEPMlKuPCZIy7h/gwe19S7damEWwTmWHkQP9ffqDR7ehYyYxXOvtaOl7WZpYqqdZbvNRfWoq027QoMTGDo5Ard7jUGAdtEJrRZRFf2fhB4vGQbOh5DjGTh1pCpcLAeFftd10ajILeURXOcH76jRD1+ietSilQrK1Tel0UUpT29UjYG8lJpKchVV5DsuxHG9cMtGnF9prXqj0+hnav5W+xOLMcsCtxpkiiycTWoRqlx0nB5VO2zJgc6D19O24sByUWrBPUKk6CJLmfB9ovRGacxe6vh8voWrivCCDbZJ3CMo8NGoGOtobm6OGQRUbPdtjOTs8tMyna+qP+4CNKe7wChbO5s3z+rHLb8q+qdHmhSZoXNCfoWU6i3807IkHYmGLx96b8cu04pnKbBCLHx2i4NhWvPFoo9mKIqkzGaFxdBPR4+f7T94MLfa3BsmfJM6sQkKeQAAAABJRU5ErkJggg=="

    },
    {
      "ID": 7890,
      "name": "Future Robotics Corp.",
      "product": "Personal Loan",
      "amount": 95000,
      "date": "2023-12-01",
      "purpose": "Funding for Innovation",
      "status": "Processing",
      "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANTSURBVHgBrVZLTBNRFD3vzbS0lVoqQhEVq1hFJaCI0QTxE11oookLTdypcaeGuHfhyujOmJi4daUJifGT+Fn4icFPjAhB0PhB/p/wLdAv7bz3fDNYpKHTQvUkk5m578w5993cuTMEGVBfX2/1VtRWUmrZAoIiQbjCOBuwEuu3Kl/++0zPE7OF560dHpctt45Sek7e5qXiCMYHqYU+IlCubVvr7lqQQXOnX4rxy5yLi1gECCXXHbnLLpcVkICpQVP3SLHQ8FSGK5AFhOBtmlAO7/Ll9yViNHHx8HmrBxpeZytuZEtouUrFi2dtvcvmGaz0Ft0VIOvxj5Al2VDosN9LMmhsHz5NCNmP/wQhsE/X1K/VGVdyyYz8oeEjXO6lWJLrgKYxxGIxFK4ohNudl9aECX5enm6r79oGDsnipSxNKBhCw6u3mPRPJsVl6+LshdMoWbva1EClavXHnyP7aI7desyM1PKpFTwUwgqnLSnOOUd/zwAyQXDtuCrrUwmRmrClYhM6G5twZY8PHf4gevxhBGMMd1q68eTBM6zzeeEp9pg7UFqjCo2XE4WmXHe5XThz/hTQ+g7r3LnGoUORrTIWjSMSiSIdFEqLqRS3p2WR+ea13gI4izzwlq5BepA8qieTjhK3WMGpkhR78m0QQc9qZAJjLErjGhtKRxJSfHjV3ybjwTiqyzdj245KZAQhXyln2ptMvHFPCbpKq8C6p4BphuUFDiwEcgC2UNVirc9E1BDHuEuBUuIEzbfJrYcxISsbxBSmEQU3acNYJH7fmKYfvg82qqpl+9xFDoZJKROTAuKPgD0agyrfgaA9B4IkT/oc2LEULigzw0HH9+2ly8uMFlEV5eZcsi44jlGZXWRWXEfEZkXAYZsnrkPn+uWuEnz5sl81ypQgNLWPvhQExsALyNxDCCAbOOU+HML5snp9wQHDKLEwPjZyQub+Iy7rna24kZwI/ApPTZxM3M8aHNy5aczC6IEg939BlhBCtHEm9u6p8o3MM9BRsSG/T9BwjazjdZ2PRYALcSMeQO3RjVv758ZN/yqedjZ7GTe+E0ckyWPCn+Cc3Roe6r15dvexlOPV1GAuHrc318hvQJnGRTGRQ5jIaR0Ihb8MN3z6XFdXN53u2d/yFz9343A4TAAAAABJRU5ErkJggg=="
    },
    {
      "ID": 6543,
      "name": "Finance Plus Ltd.",
      "product": "Personal Loan",
      "amount": 70000,
      "date": "2023-12-18",
      "purpose": "Purchasing Marketing Tools",
      "status": "Approved",
      "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPkSURBVHgBnVZdaJtVGH7O+b4kbWyztElbuna6ZomWVbsO1m1I0XQKDrwQvRMm9nIigthLL9Yy8a6goOxCdFR2MUFWHG7zd61/MLbZrO3USNMki23XZPn/T/r9eL6vS1mWk27rA/k4vO97nud933PeQwgeALfbLZ785Exfg6mhX5XkdkGgNJtLr4KQxecHHFcftJ/Uc/y04O9oNpjfEQzC2wTEyouRZXlFFIUpQoSJ/T0twYcS8AQSjEw5oSjqu3gEEIFM5JfvjA8N9WbqCtz4L98llbKXCKHPYBtQVWU+E8+9NHywZ61io5XF93/42pVyfma75Hq2hPY3WRunpz2BzZaKlYWtY8dZFXDyNpaKJaythhGLxqHIMlrtrXC4ergiVBB7LZbmc2x5RBfVPtd9kRGmfvr+4FQihW/PXYLPuwRJkqp81lYr3jx+DPY2G19Ixch+p32SbqjQ93lB353/Ed6b/9aQa0jGk/ji00kUC0WuQFleP64L/RmIHWUKNa2JxeKIBoPYCplUBrNXb3B9omg4fG3xjluErLzKTqcm4MLXF3GkrxOHnO345noQ8yEmmClyK6kLVX1NBKX72IKzMcVO3gpnhwWjL/frtnShjHCygLNXljDwuA2fTXvrtuiuwpCoyvLThNIal6wooPdVZmk06r+R557ELlsTzs/eQiqZrksvCEKXSKhgYko1TqPJCIVTmYbleA4fTHmwmsijoXibXV2WjFCbpEqIjbLp4zbRbG5EprDOFfAHo7qIBq1FtwIhbhxUpUxlSQ7zfEaTAZf/WkEiV6p2BMKg6XyVyVPnJrH6b1LW6N94TllSkCtJGD1zBRc8IUgrMfZY+fXRND/RVhX7D5sVlihHgc5RSuhXPIECK107YoukIjQfhlJmBL3dwO4O9NmacailGTtEQY/V2hRei9TyE3lKHHS1zVxbDP9NqbC34iClEp6Vyjg68BQeEzcOT2i1AA1GqKyyrsQ63tvTrdu92Ty+DIURuR3Bzu7OTXICNTC4p/2i/tjJUCYohM+1tSmRxM5ffoers/qNKS5EQc0GKNmyLlJBb5MZH+7twep6ETlFZV3ZuNqEkvENobuY9UUvi7nc8K4ffoa45fDUR9LlQOTgAW1uZw447cOabfPyxvPp17unf/Vvl1yDddEP+9xCUFLJGxXbpsCL/Y5wKZl9QSVYwjbBMvdZ5r3Dh1225RoBDZ1jbwVluaTV+BF44701+8ey2jjYwjjuNdf9V5EYO7VbIOoJVtErLAsrL54daZJ9Tkel4qTj5Ogcj6euwL3IjJ1yKwayD5Lcom8iCBKVBMqKxWMbP5beau//YWigrhl5LqAAAAAASUVORK5CYII="

    }
  ];

  //returning the table with the data
  return ( <div className=" lg:w-[110%] w-[290%] xl:w-[110%] md:w-[188%]">
    <table className=" w-full bg-white border border-gray-300">
      <thead className="bg-[#E5E8EC] text-left h-14 table-fixed ">
        <tr>
          <th className="py-2 px-4 border-b text-sm font-[500]">
            <span className="flex flex-row items-center gap-2">
              Borrower ID
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                data-v-669ada12=""
              >
                <path
                  d="M4.15133 7.33335H11.8493C12.424 7.33335 12.7293 6.65335 12.3473 6.22335L8.49866 1.89335C8.43624 1.82288 8.35957 1.76647 8.27372 1.72783C8.18787 1.6892 8.09481 1.66922 8.00067 1.66922C7.90653 1.66922 7.81346 1.6892 7.72761 1.72783C7.64176 1.76647 7.56509 1.82288 7.50266 1.89335L3.65266 6.22335C3.27067 6.65335 3.576 7.33335 4.15133 7.33335ZM7.502 14.106C7.56443 14.1765 7.6411 14.2329 7.72694 14.2715C7.81279 14.3102 7.90586 14.3301 8 14.3301C8.09414 14.3301 8.18721 14.3102 8.27305 14.2715C8.3589 14.2329 8.43557 14.1765 8.498 14.106L12.3467 9.77601C12.7293 9.34668 12.424 8.66668 11.8487 8.66668H4.15133C3.57667 8.66668 3.27133 9.34668 3.65333 9.77668L7.502 14.106Z"
                  fill="#002147"
                  fillOpacity="0.4"
                ></path>
              </svg>
            </span>
          </th>
          <th className="py-2 px-4 border-b text-sm font-[500]">
            <span className="flex flex-row items-center gap-2">
              Business Customer
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                data-v-669ada12=""
              >
                <path
                  d="M4.15133 7.33335H11.8493C12.424 7.33335 12.7293 6.65335 12.3473 6.22335L8.49866 1.89335C8.43624 1.82288 8.35957 1.76647 8.27372 1.72783C8.18787 1.6892 8.09481 1.66922 8.00067 1.66922C7.90653 1.66922 7.81346 1.6892 7.72761 1.72783C7.64176 1.76647 7.56509 1.82288 7.50266 1.89335L3.65266 6.22335C3.27067 6.65335 3.576 7.33335 4.15133 7.33335ZM7.502 14.106C7.56443 14.1765 7.6411 14.2329 7.72694 14.2715C7.81279 14.3102 7.90586 14.3301 8 14.3301C8.09414 14.3301 8.18721 14.3102 8.27305 14.2715C8.3589 14.2329 8.43557 14.1765 8.498 14.106L12.3467 9.77601C12.7293 9.34668 12.424 8.66668 11.8487 8.66668H4.15133C3.57667 8.66668 3.27133 9.34668 3.65333 9.77668L7.502 14.106Z"
                  fill="#002147"
                  fillOpacity="0.4"
                ></path>
              </svg>
            </span>
          </th>
          <th className="py-2 px-4 border-b text-sm font-[500]">
            <span className="flex flex-row items-center gap-2">
              Load Product
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                data-v-669ada12=""
              >
                <path
                  d="M4.15133 7.33335H11.8493C12.424 7.33335 12.7293 6.65335 12.3473 6.22335L8.49866 1.89335C8.43624 1.82288 8.35957 1.76647 8.27372 1.72783C8.18787 1.6892 8.09481 1.66922 8.00067 1.66922C7.90653 1.66922 7.81346 1.6892 7.72761 1.72783C7.64176 1.76647 7.56509 1.82288 7.50266 1.89335L3.65266 6.22335C3.27067 6.65335 3.576 7.33335 4.15133 7.33335ZM7.502 14.106C7.56443 14.1765 7.6411 14.2329 7.72694 14.2715C7.81279 14.3102 7.90586 14.3301 8 14.3301C8.09414 14.3301 8.18721 14.3102 8.27305 14.2715C8.3589 14.2329 8.43557 14.1765 8.498 14.106L12.3467 9.77601C12.7293 9.34668 12.424 8.66668 11.8487 8.66668H4.15133C3.57667 8.66668 3.27133 9.34668 3.65333 9.77668L7.502 14.106Z"
                  fill="#002147"
                  fillOpacity="0.4"
                ></path>
              </svg>
            </span>
          </th>
          <th className="py-2 px-4 border-b text-sm font-[500]">
            <span className="flex flex-row items-center gap-2">
              Requested Loan Amount (RM)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                data-v-669ada12=""
              >
                <path
                  d="M4.15133 7.33335H11.8493C12.424 7.33335 12.7293 6.65335 12.3473 6.22335L8.49866 1.89335C8.43624 1.82288 8.35957 1.76647 8.27372 1.72783C8.18787 1.6892 8.09481 1.66922 8.00067 1.66922C7.90653 1.66922 7.81346 1.6892 7.72761 1.72783C7.64176 1.76647 7.56509 1.82288 7.50266 1.89335L3.65266 6.22335C3.27067 6.65335 3.576 7.33335 4.15133 7.33335ZM7.502 14.106C7.56443 14.1765 7.6411 14.2329 7.72694 14.2715C7.81279 14.3102 7.90586 14.3301 8 14.3301C8.09414 14.3301 8.18721 14.3102 8.27305 14.2715C8.3589 14.2329 8.43557 14.1765 8.498 14.106L12.3467 9.77601C12.7293 9.34668 12.424 8.66668 11.8487 8.66668H4.15133C3.57667 8.66668 3.27133 9.34668 3.65333 9.77668L7.502 14.106Z"
                  fill="#002147"
                  fillOpacity="0.4"
                ></path>
              </svg>
            </span>
          </th>
          <th className="py-2 px-4 border-b text-sm font-[500]">
            <span className="flex flex-row items-center gap-2">
              Date
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                data-v-669ada12=""
              >
                <path
                  d="M4.15133 7.33335H11.8493C12.424 7.33335 12.7293 6.65335 12.3473 6.22335L8.49866 1.89335C8.43624 1.82288 8.35957 1.76647 8.27372 1.72783C8.18787 1.6892 8.09481 1.66922 8.00067 1.66922C7.90653 1.66922 7.81346 1.6892 7.72761 1.72783C7.64176 1.76647 7.56509 1.82288 7.50266 1.89335L3.65266 6.22335C3.27067 6.65335 3.576 7.33335 4.15133 7.33335ZM7.502 14.106C7.56443 14.1765 7.6411 14.2329 7.72694 14.2715C7.81279 14.3102 7.90586 14.3301 8 14.3301C8.09414 14.3301 8.18721 14.3102 8.27305 14.2715C8.3589 14.2329 8.43557 14.1765 8.498 14.106L12.3467 9.77601C12.7293 9.34668 12.424 8.66668 11.8487 8.66668H4.15133C3.57667 8.66668 3.27133 9.34668 3.65333 9.77668L7.502 14.106Z"
                  fill="#002147"
                  fillOpacity="0.4"
                ></path>
              </svg>
            </span>
          </th>
          <th className="py-2 px-4 border-b text-sm font-[500]">
            <span className="flex flex-row items-center gap-2">
              Purpose
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                data-v-669ada12=""
              >
                <path
                  d="M4.15133 7.33335H11.8493C12.424 7.33335 12.7293 6.65335 12.3473 6.22335L8.49866 1.89335C8.43624 1.82288 8.35957 1.76647 8.27372 1.72783C8.18787 1.6892 8.09481 1.66922 8.00067 1.66922C7.90653 1.66922 7.81346 1.6892 7.72761 1.72783C7.64176 1.76647 7.56509 1.82288 7.50266 1.89335L3.65266 6.22335C3.27067 6.65335 3.576 7.33335 4.15133 7.33335ZM7.502 14.106C7.56443 14.1765 7.6411 14.2329 7.72694 14.2715C7.81279 14.3102 7.90586 14.3301 8 14.3301C8.09414 14.3301 8.18721 14.3102 8.27305 14.2715C8.3589 14.2329 8.43557 14.1765 8.498 14.106L12.3467 9.77601C12.7293 9.34668 12.424 8.66668 11.8487 8.66668H4.15133C3.57667 8.66668 3.27133 9.34668 3.65333 9.77668L7.502 14.106Z"
                  fill="#002147"
                  fillOpacity="0.4"
                ></path>
              </svg>
            </span>
          </th>
          <th className="py-2 px-4 border-b text-sm font-[500]">
            <span className="flex flex-row items-center gap-2">
              Status
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                data-v-669ada12=""
              >
                <path
                  d="M4.15133 7.33335H11.8493C12.424 7.33335 12.7293 6.65335 12.3473 6.22335L8.49866 1.89335C8.43624 1.82288 8.35957 1.76647 8.27372 1.72783C8.18787 1.6892 8.09481 1.66922 8.00067 1.66922C7.90653 1.66922 7.81346 1.6892 7.72761 1.72783C7.64176 1.76647 7.56509 1.82288 7.50266 1.89335L3.65266 6.22335C3.27067 6.65335 3.576 7.33335 4.15133 7.33335ZM7.502 14.106C7.56443 14.1765 7.6411 14.2329 7.72694 14.2715C7.81279 14.3102 7.90586 14.3301 8 14.3301C8.09414 14.3301 8.18721 14.3102 8.27305 14.2715C8.3589 14.2329 8.43557 14.1765 8.498 14.106L12.3467 9.77601C12.7293 9.34668 12.424 8.66668 11.8487 8.66668H4.15133C3.57667 8.66668 3.27133 9.34668 3.65333 9.77668L7.502 14.106Z"
                  fill="#002147"
                  fillOpacity="0.4"
                ></path>
              </svg>
            </span>
          </th>
          <th className="py-2 px-4 border-b text-sm font-[500] inset-x">
            <span className="flex flex-row items-center gap-2">Action</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {/* //mapping the data to the table */}
        {companies.map((company, index) => (
          <tr key={index}>
            <td className="py-5 px-5 border-b text-sm font-semibold">#{company.ID}</td>
            <td className="py-5 px-5 border-b ">
                <span className="flex flex-row gap-2 items-center">
                    <img
                className="h-6 w-6 rounded-full"
                src={company.avatar}
                alt="avatar"
              /> <p className="text-sm">

              {company.name}
              </p>
                </span>
              
              
            </td>
            <td className="py-5 px-5 border-b text-sm">{company.product}</td>
            <td className="py-5 px-5 border-b text-sm">{company.amount}</td>
            <td className="py-5 px-5 border-b text-sm">{company.date}</td>
            <td className="py-5 px-5 border-b text-sm">{company.purpose}</td>
            <td className="py-5 px-5 border-b ">
                {/* if company.status[0].code = Approved, show green background, if code = Processing, show red backgroud */}
                <span className={cx("rounded-full px-3 py-2 text-sm flex items-center justify-center", {
                    "bg-[#E5F9F2] text-[#10B981]": company.status === "Approved",
                    "bg-[#FFF7ED] text-[#EF4444]": company.status === "Processing",
                    "bg-[#FFF7ED] text-[#B91C1C]": company.status === "Cancelled"
                })}>
                    {company.status}
                </span>
            </td>
            <td className="py-5 px-5 border-b inset-x">
              <span className="flex flex-row items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  data-v-669ada12=""
                >
                  <g clipPath="url(#clip0_1_313)">
                    <path
                      d="M7.83331 3.16667H3.16665C2.81302 3.16667 2.47389 3.30715 2.22384 3.5572C1.97379 3.80724 1.83331 4.14638 1.83331 4.50001V13.8333C1.83331 14.187 1.97379 14.5261 2.22384 14.7761C2.47389 15.0262 2.81302 15.1667 3.16665 15.1667H12.5C12.8536 15.1667 13.1927 15.0262 13.4428 14.7761C13.6928 14.5261 13.8333 14.187 13.8333 13.8333V9.16667"
                      stroke="#002147"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M12.8333 2.16667C13.0985 1.90145 13.4582 1.75246 13.8333 1.75246C14.2084 1.75246 14.5681 1.90145 14.8333 2.16667C15.0985 2.43189 15.2475 2.7916 15.2475 3.16667C15.2475 3.54174 15.0985 3.90145 14.8333 4.16667L8.49998 10.5L5.83331 11.1667L6.49998 8.5L12.8333 2.16667Z"
                      stroke="#002147"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                  <defs>
                    <clippath id="clip0_1_313">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.5 0.5)"
                      ></rect>
                    </clippath>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  data-v-669ada12=""
                >
                  <g clipPath="url(#clip0_1_314)">
                    <path
                      d="M2.5 4.5H3.83333H14.5"
                      stroke="#A30D11"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M5.83331 4.49999V3.16666C5.83331 2.81304 5.97379 2.4739 6.22384 2.22385C6.47389 1.9738 6.81302 1.83333 7.16665 1.83333H9.83331C10.1869 1.83333 10.5261 1.9738 10.7761 2.22385C11.0262 2.4739 11.1666 2.81304 11.1666 3.16666V4.49999M13.1666 4.49999V13.8333C13.1666 14.187 13.0262 14.5261 12.7761 14.7761C12.5261 15.0262 12.1869 15.1667 11.8333 15.1667H5.16665C4.81302 15.1667 4.47389 15.0262 4.22384 14.7761C3.97379 14.5261 3.83331 14.187 3.83331 13.8333V4.49999H13.1666Z"
                      stroke="#A30D11"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M7.16669 7.83333V11.8333"
                      stroke="#A30D11"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M9.83331 7.83333V11.8333"
                      stroke="#A30D11"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                  <defs>
                    <clippath id="clip0_1_314">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.5 0.5)"
                      ></rect>
                    </clippath>
                  </defs>
                </svg>
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
    
  );
};
//exporting the table component
export default CompanyTable;