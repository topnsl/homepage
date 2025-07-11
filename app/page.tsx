import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Droplets, Shield, Zap, Users, Star, CheckCircle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Droplets className="h-8 w-8" />
            <h1 className="text-2xl font-bold">누수탐지 전문가</h1>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">24시간 긴급출동: 010-1234-5678</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20 px-6 text-white"
        style={{ backgroundImage: "url('/main-background.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 border-none">24시간 긴급출동 서비스</Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            정확한 누수탐지로
            <br />
            <span className="text-blue-300">소중한 재산을 보호하세요</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            최첨단 장비와 20년 경력의 전문가가 신속하고 정확한 누수탐지 서비스를 제공합니다. 작은 누수부터 대형 누수까지
            완벽하게 해결해드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              지금 바로 상담받기
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white/10 hover:text-white"
            >
              서비스 자세히 보기
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">전문 누수탐지 서비스</h3>
            <p className="text-gray-600 text-lg">다양한 누수 상황에 맞는 맞춤형 솔루션을 제공합니다</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Droplets className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">상수도 누수탐지</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">지하 매설관, 급수관, 배수관의 정확한 누수 위치를 찾아드립니다.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">방수 누수탐지</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">화장실, 베란다, 옥상 등 방수층 누수를 정밀하게 탐지합니다.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">난방 누수탐지</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">바닥난방, 보일러 배관의 누수를 비파괴 방식으로 찾아드립니다.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">24시간 긴급출동</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">응급 상황 시 24시간 언제든지 신속하게 출동해드립니다.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">왜 저희를 선택해야 할까요?</h3>
            <p className="text-gray-600 text-lg">20년 경력의 전문성과 최첨단 장비로 완벽한 서비스를 제공합니다</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-2">20년 경력의 전문가</h4>
                <p className="text-gray-600">풍부한 경험과 노하우로 어떤 누수도 정확하게 찾아드립니다.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-2">최첨단 탐지장비</h4>
                <p className="text-gray-600">독일산 전문 장비로 비파괴 방식의 정밀한 누수탐지를 실시합니다.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-2">합리적인 가격</h4>
                <p className="text-gray-600">투명한 견적과 합리적인 가격으로 부담 없는 서비스를 제공합니다.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-2">신속한 출동</h4>
                <p className="text-gray-600">접수 후 1시간 내 현장 출동으로 빠른 문제 해결을 도와드립니다.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-2">A/S 보장</h4>
                <p className="text-gray-600">작업 완료 후 6개월 A/S 보장으로 안심하고 이용하실 수 있습니다.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-2">무료 상담</h4>
                <p className="text-gray-600">전화 상담부터 현장 견적까지 무료로 친절하게 안내해드립니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">고객 후기</h3>
            <p className="text-gray-600 text-lg">실제 고객들의 생생한 후기를 확인해보세요</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">김○○님</CardTitle>
                <CardDescription>아파트 화장실 누수</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "화장실 천장에서 물이 떨어져서 급하게 연락드렸는데, 1시간 만에 와서 정확한 위치를 찾아주셨어요. 전문
                  장비로 벽을 뚫지 않고도 누수 지점을 찾아주셔서 정말 감사했습니다."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">박○○님</CardTitle>
                <CardDescription>단독주택 상수도 누수</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "마당에서 물이 계속 솟아나는데 어디서 새는지 몰라서 고민이었는데, 전문가분이 와서 정확한 위치를
                  찾아주시고 수리업체까지 연결해주셔서 너무 도움이 되었어요."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">이○○님</CardTitle>
                <CardDescription>오피스텔 바닥난방 누수</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "바닥난방에서 누수가 의심되어 연락했는데, 친절하게 설명해주시고 정확한 진단으로 불필요한 공사 없이
                  문제를 해결할 수 있었습니다. 가격도 합리적이었어요."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">무료 상담 신청</h3>
            <p className="text-gray-600 text-lg">누수 문제로 고민이시라면 지금 바로 상담받아보세요</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">상담 신청서</CardTitle>
                <CardDescription>
                  정확한 상담을 위해 아래 정보를 입력해주세요. 접수 후 30분 내 연락드립니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">성함 *</Label>
                    <Input id="name" placeholder="홍길동" />
                  </div>
                  <div>
                    <Label htmlFor="phone">연락처 *</Label>
                    <Input id="phone" placeholder="010-1234-5678" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">주소</Label>
                  <Input id="address" placeholder="서울시 강남구..." />
                </div>

                <div>
                  <Label htmlFor="issue">누수 상황</Label>
                  <Textarea
                    id="issue"
                    placeholder="어디서 언제부터 누수가 발생했는지 자세히 설명해주세요."
                    className="min-h-[120px]"
                  />
                </div>

                <div>
                  <Label htmlFor="urgency">긴급도</Label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option>일반 상담</option>
                    <option>긴급 출동 필요</option>
                    <option>매우 긴급 (24시간 출동)</option>
                  </select>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">무료 상담 신청하기</Button>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-blue-600" />
                    전화 상담
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span>평일 08:00 - 18:00</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="font-semibold text-lg">010-1234-5678</span>
                    </div>
                    <p className="text-sm text-gray-600">긴급상황 시 24시간 출동 가능</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-blue-600" />
                    이메일 문의
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span>info@leakdetection.co.kr</span>
                    </div>
                    <p className="text-sm text-gray-600">이메일 문의 시 24시간 내 답변</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    서비스 지역
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold">서울 전 지역</p>
                    <p className="text-sm text-gray-600">
                      강남구, 서초구, 송파구, 강동구, 마포구, 용산구, 중구, 종로구 등
                    </p>
                    <p className="font-semibold mt-3">경기 일부 지역</p>
                    <p className="text-sm text-gray-600">성남시, 분당구, 수원시, 안양시, 과천시 등</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Droplets className="h-6 w-6" />
                <h4 className="text-xl font-bold">누수탐지 전문가</h4>
              </div>
              <p className="text-gray-400 mb-4">
                20년 경력의 전문가가 최첨단 장비로 정확한 누수탐지 서비스를 제공합니다.
              </p>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">24시간 긴급출동: 010-1234-5678</span>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-4">서비스</h5>
              <ul className="space-y-2 text-gray-400">
                <li>상수도 누수탐지</li>
                <li>방수 누수탐지</li>
                <li>난방 누수탐지</li>
                <li>24시간 긴급출동</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">연락처</h5>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>010-1234-5678</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>info@leakdetection.co.kr</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>서울시 강남구 테헤란로 123</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 누수탐지 전문가. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
