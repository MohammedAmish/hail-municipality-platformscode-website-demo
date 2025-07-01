export interface Municipality {
  name: string;
  phone: string;
  central: string;
  fax: string;
  mayor: string;
  address: string;
  location: string;
  subMunicipalities: string[];
}

export const MUNICIPALITIES: Municipality[] = [
  {
    name: 'بقعاء',
    phone: '65270076',
    central: '65270076',
    fax: '65270188',
    mayor: 'الشريف طلال ال حزم',
    address: 'منطقة حائل ـ محافظة بقعاء ــ بلدية محافظة بقعاء',
    location: '',
    subMunicipalities: ['الشيحية', 'ضبيعة', 'الناصرية'],
  },
  {
    name: 'تربة',
    phone: '65640007',
    central: '65640007',
    fax: '65640040',
    mayor: 'سعدي فايز الرشيدي',
    address: 'منطقة حائل ــ مدينة تربة ــ بلدية مدينة تربة',
    location: '',
    subMunicipalities: ['الحيانية', 'الزبيرة', 'الجبيلي'],
  },
  {
    name: 'جبة',
    phone: '65412279',
    central: '65412279',
    fax: '65412058',
    mayor: 'سعد عبدالرحمن مطني الشبرمي',
    address: 'منطقة حائل ــ مدينة جبة ــ بلدية مدينة جبة',
    location: '',
    subMunicipalities: ['قناء', 'ام القلبان'],
  },
  {
    name: 'الخطة',
    phone: '65390027',
    central: '65390027',
    fax: '',
    mayor: 'بندر فلاج الشمري',
    address: 'منطقة حائل ــ مدينة الخطة ــ بلدية مدينة الخطة',
    location: '',
    subMunicipalities: ['القاعد', 'التربية'],
  },
  {
    name: 'موقق',
    phone: '65380015',
    central: '65380015',
    fax: '65380072',
    mayor: 'النشمي محمد العنزي',
    address: 'منطقة حائل ــ مدينة موقق ــ بلدية مدينة موقق',
    location: '',
    subMunicipalities: ['الشقيق', 'الحفير', 'دليهان', 'المحفر'],
  },
  // ... (add the rest of the municipalities in the same format)
]; 